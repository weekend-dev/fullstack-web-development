# fullstack-web-development

## mysql
```
mysql -u root -p
```

## backend to mysql
```
docker exec backend bash

# django shell
python manage.py shell

# check connection
from django.db import connections
connections['default'].cursor()

# check settinigs
from django.conf import settings
print(settings.DATABASES)



# migrate
python manage.py migrate
```