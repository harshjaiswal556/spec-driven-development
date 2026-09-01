# Principles and Goals

## 1. Core objective
Build a software delivery system in which specifications are created and approved before implementation, AI performs the majority of implementation, and humans provide engineering judgment and final approval.

## 2. Primary principles

### 2.1 No approved specification, no implementation
An AI coding agent must not implement an ambiguous or unapproved requirement.

### 2.2 Specification is the product/engineering contract
The specification explains what the system must do, the rules it must follow, the interfaces it exposes, and the quality attributes it must satisfy.

### 2.3 JIRA is work management, not the source of detailed truth
JIRA should contain ticket metadata, status, ownership, priority, and links to specifications. Detailed requirements live in Git-managed Markdown.

### 2.4 Git is historical truth
Current Markdown files represent the current approved state. Git preserves every previous state and exact diffs.

### 2.5 AI consumes the smallest sufficient context
AI should not reload an entire service or feature when a small change can be implemented from a targeted specification, affected components, and relevant code.

### 2.6 Humans own decisions
Product owners own business intent. Architects own system-level design. Developers own technical validation and final code review. Security, QA, data, and platform specialists own their respective gates.

### 2.7 AI must not guess
If a requirement is ambiguous, AI should report the ambiguity and request clarification instead of inventing business behavior.

### 2.8 Code must remain traceable to intent
Every production change should be traceable back to a JIRA ticket and an approved specification state.

## 3. Success measures
Do not measure only AI-generated code percentage. Also measure:
- escaped defects
- production incidents
- review rejection rate
- rework rate
- test quality
- specification defects
- cycle time
- AI repair success rate
- security findings
- performance regressions
- change failure rate

## 4. Target outcome
The target operating model is:
Business intent → specification → architecture/contracts → AI implementation → automated verification → human review → deployment → production feedback → specification update.
