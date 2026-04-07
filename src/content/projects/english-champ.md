---
title: "English Champ - EdTech Ecosystem"
description: "A modern, interactive e-learning platform dashboard for language mastery and gamified education."
date: "2024-03-15"
tags: ["E-Learning", "React", "Node.js"]
featured: true
image: "https://api.dicebear.com/7.x/shapes/svg?seed=EnglishChamp&backgroundColor=0a0a0a&shape1Color=eb2592&shape2Color=b020d1&shape3Color=6c32c9"
---

English Champ is a Bangladesh-based EdTech platform designed to scale. The project involved building a unified ecosystem for 500+ students, 20+ teachers, and a 10-person admin/consultant team. This was not just a website; it was a logistics engine engineered to handle everything from lead generation to high-precision class scheduling.

---

## The Launchpad Ecommerce and Visual Identity

For the ecommerce side, I implemented a minimalist design strategy to build immediate trust with parents. I used a strict **two-color palette** to keep the UI clean and professional, avoiding the cluttered look common in the EdTech space.

The entire experience was built around a **rocket-based theme**. I framed learning English as a mission of exploration where students "launch" their journey and travel to new planets as they progress. This gamification served as a functional progress-tracking UX across the **7 levels** of the curriculum.



### Design and UX Organization

| Category | Implementation | Objective |
| :--- | :--- | :--- |
| **Color Palette** | Strict two-color system | Reduce cognitive load and increase trust for parents. |
| **Theme** | Rocket and Space Exploration | Create an engaging "level-up" metaphor for students. |
| **Curriculum** | 7 Planet-based levels | Provide a clear, visual roadmap for long-term learning. |
| **Tone** | Professional yet Energetic | Balance child-friendly visuals with adult-oriented reliability. |

---

## Mission Control The Scheduling Dashboard

The secondary dashboard was the most critical phase from an engineering perspective. With hundreds of students and dozens of teachers, the margin for error was zero. I focused heavily on the **scheduling logic** and state management.

If a teacher is booked for "Planet 2" at 4 PM, the system locks that slot across the entire database. A single collision would hamper precious hours for the faculty and the paying parents. I built an automated notification system that keeps everyone synced in real-time, reducing manual coordination from hours to minutes.

### Dashboard Technical Constraints

| Feature | Engineering Solution |
| :--- | :--- |
| **Scheduling** | Deterministic conflict-checking logic to prevent double-booking. |
| **Notifications** | Automated alerts for enrollment and upcoming class timings. |
| **Data Integrity** | Locked database transactions for high-stakes scheduling tasks. |

---

## Command Center The Bespoke CRM

Instead of using a bloated, off-the-shelf CRM, I built a custom tool tailored to the team's specific sales funnel. This allowed the sales, consulting, and admin teams to operate from a single source of truth.

* **Sales Team:** Track leads from initial contact to payment verification.
* **Consultants:** Access student profiles instantly to provide academic guidance.
* **Admins:** Verify payments and "push" student data directly into the dashboard.

This direct integration meant that the moment a parent paid, the student was automatically "launched" into their respective planet on the dashboard, removing the communication gap that usually kills productivity in larger teams.

---

## Analytical Impact

The following table highlights the operational improvements achieved through this custom-engineered ecosystem.

| Metric | Before / Generic Solution | After / Custom Engineered |
| :--- | :--- | :--- |
| **Scheduling Conflicts** | Frequent manual entry overlaps | Zero conflicts via automated logic. |
| **Admin Overhead** | 4 hours/day manual coordination | <30 minutes/day via automation. |
| **Lead Conversion** | Fragmented data across tools | 40% efficiency boost with unified CRM. |
| **Student Retention** | Low visibility on progress | High engagement via planet-tracking. |

---

## Final Engineering Thoughtprocess

The success of English Champ came down to **modularizing complexity**. By separating the front-end "Launchpad" from the critical "Mission Control" dashboard, I ensured that high traffic on the shop would never affect the stability of live classes. The two-color neobrutalist aesthetic and the rocket theme provided a clear DX and UX, making a complex educational journey feel like a simple, exciting mission.