# Trivy Secret Scanning Demo – Node.js with Hard-coded Credentials

This repository demonstrates how **hard-coded cloud credentials inside a Node.js application** can be detected automatically by Trivy using its **default secret-scanning rules**.

> ⚠️ This code is intentionally insecure and is for **educational purposes only**.

---

## Prerequisites

- Docker
- Trivy

### Install Trivy on macOS

Using Homebrew:

```bash
brew install aquasecurity/trivy/trivy
```

Verify installation:

```bash
trivy --version
```

Official documentation:
https://trivy.dev/latest/getting-started/installation/

---

## Project Structure

```
.
├── Dockerfile
├── index.js        # ❌ Contains hard-coded AWS credentials (intentional)
├── package.json
└── README.md
```

---

## Build the Docker Image

```bash
docker build -t leaky-node-app:latest .
```

This step copies the source code (including credentials) into the image.

---

## Scan the Image with Trivy

Run Trivy with default scanners:

```bash
trivy image --scanners vuln,secret leaky-node-app:latest
```

---

## Expected Result

Trivy should report a **CRITICAL secret finding** similar to:

```
/app/index.js (secrets)
CRITICAL: AWS (aws-access-key-id)
```

Trivy also shows **which Dockerfile layer introduced the secret**, helping identify the root cause.

---

## Key Takeaways

- Secret scanning detects **human mistakes**, not software bugs
- One leaked credential can be more dangerous than many CVEs
- Passing vulnerability scans does **not** guarantee security

---

## Disclaimer

Do **not** deploy this image.
Do **not** reuse credentials.
This repository is for **learning and experimentation only**.
