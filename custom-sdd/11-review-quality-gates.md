# Review and Quality Gates

## 1. Automated gates
Before human code review:
- compile/build
- lint
- type checks
- unit tests
- integration tests
- contract tests
- E2E tests where applicable
- security scanning
- dependency scanning
- API validation
- performance checks where required
- specification compliance checks

## 2. Specification compliance
An automated reviewer should compare implementation behavior against approved acceptance criteria and business rules.

Example:
If the spec requires:
- minimum password length
- uppercase
- lowercase
- number

and code only checks length, the change should fail specification compliance.

## 3. Human review checklist
- [ ] Specification compliance
- [ ] Architecture compliance
- [ ] Security
- [ ] Error handling
- [ ] Edge cases
- [ ] Performance
- [ ] Observability
- [ ] Test adequacy
- [ ] Backward compatibility
- [ ] Maintainability

## 4. Do not use LGTM as the complete review standard
A reviewer should explicitly validate the important engineering dimensions.

## 5. Definition of Ready
A ticket is ready only when:
- requirement is clear
- specification is approved
- acceptance criteria exist
- dependencies are known
- relevant NFRs are known
- implementation context is sufficient

## 6. Definition of Done
A ticket is done only after all required automated and human gates pass.
