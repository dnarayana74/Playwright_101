# Playwright LambdaTest Parallel Automation

## Overview
This project automates:
1. **Slider drag and validation**.
2. **Form submission with accessibility & performance checks**.

Runs tests **in parallel** on **LambdaTest Cloud**.

---

## Tech Stack
- Cypress v13
- Cypress-Axe
- Cypress-Audit
- LambdaTest Cypress CLI
- Gitpod Dev Environment

---

## Setup Instructions

**1. Clone Repository**
git clone <repo-url>
cd cypress-lambdatest

**2. Install Dependencies**
npm install

**3. Add LambdaTest Credentials**
Update lambdatest-config.json:
"username": "<YOUR_USERNAME>",
"access_key": "<YOUR_ACCESS_KEY>"

**4. Run Locally**
npx cypress open

**5. Run on LambdaTest Cloud**
npx lambdatest-cypress run

**Parallel Execution**
Configured to run on:
Windows 10, Chrome 128
macOS Catalina, Edge 126

**Gitpod Instructions**
**1. Open repo in Gitpod:**
https://gitpod.io/#<repo-url>

**2.It will auto-install dependencies and open Cypress.**
Reports:
Videos: cypress/videos
Screenshots: cypress/screenshots
LambdaTest Dashboard: https://app.lambdatest.com/automation

