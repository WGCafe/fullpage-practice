FORMAT: 1A

# Populstay Landing Page API
Welcome to the **Populstay** API.

# Subscribe Populstay

## Subscribe [POST /populstay/subscribe]
通过`email`订阅populstay


Headers       | Value
------------- | ----------------
Content-Type  | application/json


+ Parameters

    + email: "test@test.com"

+ Response 200 (application/json)

    + Body

            {
                "status": "success"
            }

+ Response 404 (application/json)

    + Body

            {
                "status": "error"
            }


# Contact Us

## Contact us [POST /populstay/contactUs]
联系populstay


Headers       | Value
------------- | ----------------
Content-Type  | application/json


+ Parameters

    + email: "test@test.com",
    + name: "test",
    + title: "manager",
    + message: "test"

+ Response 200 (application/json)

    + Body

            {
                "status": "success"
            }
            
+ Response 404 (application/json)

    + Body

            {
                "status": "error"
            }