# Lattice

Lattice makes learning fun while still being effective.

It is a *library* designed for use within Svelte applications (specifically, for use within [Lock In](https://golockin.org/)). As such, most platform-level features are simulated within demos (like authentication & storage).

## Features

### Course Structure

Courses are organized into modules.

Lattice allows for non-linear progression through modules.

The primary structure of a course section is:
- **Brief introduction:** Point out key ideas to focus on.
- **Details:** Many small, focused lessons.
    - Learners select which detail they want to explore next.
    - Unlock more details by completing prior ones.
    - Consider placing "annoying" but important details behind easier ones to encourage completion. Don't abuse this though: learners should feel in control.
- **Gate:** Learners must complete a number of details to continue.
    - 75% might be a good default threshold.
- **Final module:** A summary of the section's key ideas.
    - This could be dynamic, based on what details the learner completed.

### Flow Learning

Learning sessions on Lattice should "flow."

This means:
- Minimize distractions.
- Keep learners focused on one idea at a time.
- Smooth animations & transitions.
- Hide all non-essential UI during lessons.
    - That includes the table of contents. The user must return back to the section overview to see that, encouraging focus on the current module.

### Integrity Layers

[Lock In](https://golockin.org/) provides actual, costly rewards for learners who complete courses.

So, fraud is especially important to prevent within Lattice, because if unchecked, users could exploit the system to earn rewards without actually learning.

Lattice includes several "integrity layers" to help prevent fraud:
- Cadence Tracking: Monitors how quickly learners progress through lessons. If they move too fast, they may be flagged for review.
- Active Components: Most lessons include interactive components (like dragging items). This ensures learners are actively engaging with the material. Even if a learner tries to fraudulently complete a lesson, it is likely they will actually learn something in process, because they are forced to engage.
- Annotations: While these should not be forced, learners are encouraged to annotate their lessons. This helps with retention, and also provides evidence of engagement.

### Collaborative Pressure

Lattice uses social learning to encourage learners to stay on track.

Learners join "cohorts" when they start a course. These can be public or private. Especially large cohorts may be broken into smaller "pods" to encourage more intimate collaboration.

When learners from the same cohort are online at the same time, they can complete lessons together.

Any annotations made by one learner are visible to others in real-time.

Friendly competition is encouraged: learners can see how many lessons their cohort-mates have completed.

Cohorts also have shared goals, which encourages learners to keep up with each other.

### Collectibles

Lattice has a unique "sticker" system to encourage continued engagement.

Each learner has a "sticker book," which is initially populated with a few basic stickers.

As learners complete lessons and courses, they earn new stickers to add to their collection.

Instead of profile pictures or badges, learners can literally "stick" these stickers onto their profile canvas, showcasing their achievements or personality.

Stickers can also be used as an annotation tool within lessons, allowing learners to visually mark important points or express their thoughts.
