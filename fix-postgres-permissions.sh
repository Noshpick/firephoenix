#!/bin/bash

# Скрипт для исправления прав доступа PostgreSQL

echo "🔧 Исправляем права доступа к базе данных..."

# Замените эти переменные на ваши значения
DB_NAME="firephoenix_db"
DB_USER="firephoenix_user"

# Подключаемся к PostgreSQL и даем права
sudo -u postgres psql <<EOF
-- Подключаемся к нужной базе данных
\c ${DB_NAME}

-- Даем права на схему public
GRANT ALL ON SCHEMA public TO ${DB_USER};

-- Даем права на все таблицы
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO ${DB_USER};
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO ${DB_USER};

-- Даем права на будущие таблицы
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON TABLES TO ${DB_USER};
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON SEQUENCES TO ${DB_USER};

-- Делаем пользователя владельцем схемы
ALTER SCHEMA public OWNER TO ${DB_USER};

-- Проверяем права
\dn+
\du ${DB_USER}

EOF

echo "✅ Права успешно настроены!"
echo ""
echo "Теперь попробуйте снова запустить миграции:"
echo "  cd /var/www/firephoenix/server"
echo "  bun prisma migrate deploy"
