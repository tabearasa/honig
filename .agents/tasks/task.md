---
kind: task
id: create-questions-from-buzz-facts
name: Create new questions
enabled: true
conditionToExecuteTask: >
    Verify that the max ID (ignore the Print-Nr)
    defined in 'data/buzz-facts.csv' is equal to the max ID
    of the QUESTIONS constant under `js/questions.js`.
    If not, execute this task.
---

# Task

Formulate for every question, that is not represented
in the QUESTIONS constant a new multiple-choice question
and extend that constant.
