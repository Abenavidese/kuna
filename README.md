# Kuna

**Kuna** is an open-source gamified learning platform that leverages the **Stellar blockchain** to teach **financial literacy** and **blockchain fundamentals**.  
Through interactive challenges, users earn **micro-rewards in Stellar (XLM)**, turning learning into an engaging and inclusive experience for communities in **Latin America** and beyond.  

---

##  Vision

Financial education is a critical skill, yet millions of people across emerging regions lack access to inclusive and practical tools.  
Kuna’s mission is to **empower communities** by combining:  

- **Education** → Interactive lessons on financial literacy and blockchain.  
- **Gamification** → Fun, challenge-based learning.  
- **Blockchain** → Real-world Stellar micro-rewards to connect theory with practice.  
- **Open Source** → Built in the open to ensure transparency and community collaboration.  

---

##  Features

-  **Gamified Challenges** → Learn through play.  
-  **Stellar Micro-Rewards** → Earn XLM for completing modules.  
-  **Community-Focused** → Designed with Latin America in mind, but scalable globally.  
-  **Open-Source** → Free to use, adapt, and contribute.  

---

## Tech Stack

- **Frontend:** React / Next.js  
- **Backend:** Node.js + Express (planned)  
- **Blockchain:** Stellar SDK + Soroban (for smart contracts)  
- **Database:** PostgreSQL (or Supabase for early prototyping)  

---

##  Technical Overview

Kuna is not only a learning app — it is an **open financial-education infrastructure** designed with **scalability** and **interoperability** in mind.

###  Stellar Integration
- **Stellar SDK (JS & Python)** → Used to create wallets, issue micro-rewards, and track learner progress with on-chain proof.  
- **Soroban Smart Contracts** → Manage reward distribution logic, track completion of modules, and enable programmable incentives.  
- **Stablecoin Support (USDC on Stellar)** → Ensures rewards remain accessible and stable for users in Latin America.  

###  System Architecture
1. **Frontend (React/Next.js)**  
   - Gamified UI with progress tracking.  
   - Integrated Stellar wallet for learners.  

2. **Backend (Node.js + Express)**  
   - Handles user authentication.  
   - Calls Stellar Horizon API for balance & transactions.  
   - API endpoints for reward distribution.  

3. **Smart Contracts (Soroban)**  
   - Reward validation (XLM/USDC payouts).  
   - Community pools to fund education incentives.  
   - Leaderboards powered by on-chain data.  

4. **Database (PostgreSQL / Supabase)**  
   - Stores user progress, learning paths, and metadata.  
   - Syncs with blockchain events for transparency.  

---

###  Differentiators
- **On-Chain Proof of Learning**: Each completed module can be notarized as a blockchain record → "Learning NFTs" as verifiable credentials.  
- **Micro-Remittances for Education**: Use Stellar’s low fees to enable cross-border sponsorships (e.g., donors in the US funding learners in Ecuador, with transparent tracking).  
- **Open-Source Modules**: Educators and developers can create new learning paths, directly tied to Stellar rewards logic.  
- **Community-first Approach**: Built for Latin American contexts (low connectivity, low fees), but extensible globally.  

---

###  Future Technical Goals
- Mobile-first Progressive Web App (PWA).  
- Integration with Stellar Anchor Network for fiat on/off ramps.  
- Machine Learning module recommendations (personalized learning).  
- Open APIs for NGOs, schools, and community orgs to plug into Kuna.  

---


##  Roadmap

- [x] Define concept and learning mechanics  
- [ ] Build MVP with basic gamified modules  
- [ ] Integrate Stellar SDK for micro-rewards  
- [ ] Pilot with local community groups in LatAm  
- [ ] Expand globally with open-source contributions  

---

##  Contributing

Kuna is open-source! Contributions are welcome in:  

-  Localization (multi-language support)  
-  Code contributions (backend/frontend/blockchain)  
-  Educational content creation  
-  Idea proposals  


---

## Why Stellar?

Stellar provides **fast, low-cost, and inclusive payments** — perfect for micro-rewards and financial inclusion.  
By integrating Stellar, Kuna ensures learners not only **understand blockchain**, but also **experience its benefits directly**.  

---

## License

This project is licensed under the **MIT License** – free to use, modify, and distribute.  

---

## ✉️ Contact

- LinkedIn: https://www.linkedin.com/in/anthonybenavides-dev/
- Email: anthonybenavides.edu@gmail.com 

---

### 🌟 Built with purpose. Designed for inclusion. Powered by Stellar.
