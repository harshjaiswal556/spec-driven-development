# API: Customer Registration

**API ID:** API-REG-001

## Endpoint

`POST /v1/customers`

## Request

```json
{
  "full_name": "Asha Demo",
  "email": "asha@example.test"
}
```

## Success Response

`201 Created`

```json
{
  "customer_id": "cus-1001",
  "created_at": "2026-08-26T10:00:00Z"
}
```

## Errors

`400`, `403`, `409`, and `503` follow the standard error envelope.
