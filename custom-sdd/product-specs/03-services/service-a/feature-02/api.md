# API: Customer Search

**API ID:** API-SEARCH-001

## Endpoint

`GET /v1/customers/search`

## Query Parameters

| Parameter   | Required | Example             | Notes                       |
| ----------- | -------: | ------------------- | --------------------------- |
| customer_id |       no | `cus-1001`          | Exact match                 |
| email       |       no | `asha@example.test` | Exact, case-insensitive     |
| name        |       no | `Asha`              | Minimum three characters    |
| page        |       no | `1`                 | Defaults to 1               |
| page_size   |       no | `25`                | Defaults to 25, maximum 100 |

At least one search parameter is required.

## Success Response

`200 OK`

```json
{
  "items": [
    {
      "customer_id": "cus-1001",
      "full_name": "Asha Demo",
      "masked_email": "a***@example.test"
    }
  ],
  "page": 1,
  "page_size": 25,
  "total_count": 1
}
```

## Error Responses

- `400` invalid, empty, or too-short criteria
- `403` missing `customer:read` permission
- `503` search dependency unavailable
