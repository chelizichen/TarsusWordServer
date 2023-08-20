module.exports = {
    server: {
        project: "@TarsusWord/WordNodeServer -l node -t @tarsus/ms -h 127.0.0.1 -p 14002",
        database: {
            default: true,
            type: "mysql",
            host: "localhost",
            username: "root",
            password: "12345678",
            database: "test_db", //所用数据库
            port: 3306,
            connectionLimit: 10,
        },

    },
};
