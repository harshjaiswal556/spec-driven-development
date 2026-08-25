# Data: Customer Search

**Data ID:** DATA-SEARCH-001

The search index reads from the customer profile store. It must not become a separate source of truth.

| Field            | Type   | Indexed | Notes                                 |
| ---------------- | ------ | ------: | ------------------------------------- |
| customer_id      | string |     yes | Exact match; stable `cus-` identifier |
| normalized_email | string |     yes | Encrypted or protected representation |
| normalized_name  | string |     yes | Supports partial search               |
| full_name        | string |      no | Returned in approved summary          |
| masked_email     | string |      no | Derived response value                |

Search responses must not expose internal database fields, full email addresses, or security metadata.

Dummy index freshness target: updates visible within 60 seconds of customer profile changes.
