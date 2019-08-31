## Create a new user in your mysql server
<br />
```sql <br />
Login to your root user <br />
create database shopdb; <br />
create user shopper identified by 'pass'; <br />
use shopdb; <br />
grant all privileges on shopdb.* to shopper; <br />
```

