# Change Management

## 1. Change categories

### Small change
Example:
Add a condition to DELETE.

Process:
- update affected specification section
- update version metadata if organizationally required
- record JIRA and commit in change history
- update tests
- implement through targeted AI context

### Medium change
Example:
Change authentication rules across an API.

Process:
- update business rules
- update API/test specs
- review architecture/security impact
- create or update ADR if required
- implement after approval

### Large change
Example:
Replace a service-to-service communication pattern.

Process:
- product/technical impact analysis
- architecture decision
- migration plan
- backward compatibility plan
- updated specifications
- staged implementation

## 2. Specification evolution
The current `spec.md` is always the latest approved state.

Do not manually keep a tree of full historical copies.

## 3. Git history
Every approved specification change is committed. Git preserves the exact previous state.

## 4. Change history
`change-history.md` records:
- version
- JIRA
- date
- commit
- summary

## 5. Historical reconstruction
If version 2 is requested:
- resolve version 2 to its Git commit/tag
- retrieve the relevant feature files at that commit
- use Git diff when comparing versions

## 6. Specification/code synchronization
If implementation reveals that the specification is wrong or incomplete:
- stop implementation if the issue affects intended behavior
- propose a specification change
- obtain required approval
- update the spec
- regenerate/continue implementation from the approved state

Do not allow code to silently become the real specification.

## 7. Minor ticket policy
Not every trivial JIRA ticket needs a separate change Markdown document. JIRA + Git diff + change-history may be sufficient when the change is self-explanatory and low risk.
