# Data: Customer Registration

**Entity ID:** DATA-REG-001

| Field       | Type      | Required | Notes                    |
| ----------- | --------- | -------: | ------------------------ |
| customer_id | string    |      yes | Opaque `cus-` identifier |
| full_name   | string    |      yes | 1 to 120 characters      |
| email       | string    |      yes | Encrypted at rest        |
| created_at  | timestamp |      yes | UTC timestamp            |

Dummy retention period: seven years after account closure.
