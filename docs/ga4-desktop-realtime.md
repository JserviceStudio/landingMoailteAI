# Statistiques GA4 temps réel pour MikhmoAI Desktop

## Objectif

L'endpoint `GET /api/analytics/desktop-realtime` fournit à l'application MikhmoAI Desktop une vue agrégée des pays dans lesquels l'application est active. Il ne renvoie ni adresse IP, ni identifiant utilisateur, ni événement individuel.

## Architecture

1. MikhmoAI Desktop envoie ses événements au flux GA4 Desktop.
2. Le serveur Next.js interroge la Google Analytics Data API avec un compte de service en lecture seule.
3. Le rapport est filtré avec `streamId = 14217123189` afin de ne pas mélanger le site, l'application mobile et l'application Desktop.
4. L'API publique renvoie uniquement le code pays, le nom du pays et le nombre d'utilisateurs actifs.
5. La réponse est mise en cache pendant 60 secondes et peut être réutilisée pendant cinq minutes lors d'une revalidation.

## Configuration GA4

- Propriété GA4 : `518571871`
- Flux Desktop : `14217123189`
- Compte de service : `mikhmoai-ga4-realtime-reader@moailte-mikhmon.iam.gserviceaccount.com`
- Rôle GA4 requis : `Lecteur`
- API Google Cloud requise : Google Analytics Data API

Le compte de service ne doit recevoir aucun rôle Google Cloud général et ne doit jamais être administrateur ou éditeur GA4.

## Variables Hostinger

Les variables doivent être ajoutées dans les paramètres du déploiement Git de l'application Web, et pas uniquement dans la liste générale des variables hPanel :

```dotenv
GA4_PROPERTY_ID=518571871
GA4_DESKTOP_STREAM_ID=14217123189
GA4_CLIENT_EMAIL=mikhmoai-ga4-realtime-reader@moailte-mikhmon.iam.gserviceaccount.com
GA4_PRIVATE_KEY=-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n
```

Le serveur accepte également `GA4_SERVICE_ACCOUNT_JSON_BASE64`, mais les champs séparés sont préférables sur Hostinger afin d'éviter les limites de longueur. Le code normalise les retours à la ligne PEM simples ou doublement échappés.

Après toute modification, utiliser **Enregistrer et redéployer**. Un simple enregistrement dans la liste générale hPanel ne garantit pas que la variable sera injectée dans le processus Node.js.

## Sécurité et rotation

- Ne jamais committer le fichier JSON ou la clé privée.
- Conserver la copie locale hors des dépôts, par exemple dans `%USERPROFILE%\.mikhmoai-secrets\`.
- Révoquer immédiatement une clé affichée dans un journal, une capture, un ticket ou un dépôt.
- Après rotation, remplacer `GA4_PRIVATE_KEY` dans Hostinger puis redéployer.
- Vérifier dans Google Cloud que l'ancienne clé n'est plus active.

## Contrôle de production

```powershell
Invoke-RestMethod https://mikhmoai.com/api/analytics/desktop-realtime
```

Réponse attendue lorsqu'aucune session Desktop n'est active :

```json
{
  "source": "ga4",
  "countries": [],
  "totalActiveUsers": 0
}
```

Un total à zéro est normal si aucune application Desktop n'a envoyé d'activité récente. Un statut `503` doit être recherché dans **Hostinger > Journaux d'exécution**.

## Confidentialité

L'endpoint est volontairement limité à des données géographiques agrégées. Toute évolution doit conserver ce principe : pas d'adresse IP, pas d'identifiant d'appareil et pas de données permettant de retrouver une personne.
