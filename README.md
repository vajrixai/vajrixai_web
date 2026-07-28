# Vajrix AI

Premium, motion-led company website built with Next.js App Router, TypeScript, Tailwind CSS, Framer Motion, GSAP, Lenis, React Three Fiber, Drei, and Three.js.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Quality checks

```bash
npm run typecheck
npm run build
```

## Google Cloud deployment

The Cloud Build trigger service account must be able to push to the
`vajrixai-web` Artifact Registry repository and deploy to Cloud Run. Grant
these roles once, replacing `PROJECT_ID` with the Google Cloud project ID and
`BUILD_SERVICE_ACCOUNT` with the service account shown in the trigger's
configuration:

```bash
gcloud artifacts repositories add-iam-policy-binding vajrixai-web \
  --location=us-central1 \
  --project=PROJECT_ID \
  --member="serviceAccount:BUILD_SERVICE_ACCOUNT" \
  --role=roles/artifactregistry.writer

gcloud projects add-iam-policy-binding PROJECT_ID \
  --member="serviceAccount:BUILD_SERVICE_ACCOUNT" \
  --role=roles/run.admin
```

If the Cloud Run service uses a dedicated runtime service account, also grant
the build service account `roles/iam.serviceAccountUser` on that runtime
account. The build must be run with the same service account whose permissions
are updated above.
