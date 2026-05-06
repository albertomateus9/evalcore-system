# EvalCore System

Pairwise-comparison evaluation system concept for hackathons, seminars, and project-ranking workflows.

## Overview

EvalCore System explores an evaluation model based on binary comparisons instead of direct numeric grades. Judges compare two projects at a time, and the backend can use ranking methods such as Elo-style updates or Bayesian scoring to produce a more consistent global ranking.

## Problem

Traditional grading can suffer from judge bias, inconsistent calibration, and inflated scores. Pairwise comparison reduces the cognitive load on judges and can generate stronger relative rankings across many projects.

## Solution Concept

- Present pairs of projects to evaluators.
- Record the selected winner for each comparison.
- Update project ranking scores after each vote.
- Expose ranking data to a dashboard.

## Architecture

- Backend API for projects, comparisons, votes, and ranking updates.
- Dashboard for project lists, active comparisons, and leaderboard views.
- Modular ranking logic that can be replaced or extended.

## Stack

- TypeScript
- Node.js / Express
- MongoDB / Mongoose
- React dashboard concept
- Clean Architecture-inspired separation of concerns

## Development Direction

- Implement comparison generation.
- Add ranking update service.
- Add persistence models for projects, judges, and votes.
- Build dashboard screens for voting and leaderboard views.
- Add tests for ranking edge cases and duplicate votes.

## Professional Context

This repository demonstrates software architecture, educational event tooling, ranking systems, and hackathon-ready product thinking.

## License

MIT. See [LICENSE](LICENSE).
