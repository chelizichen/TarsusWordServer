module.exports = {
    server: {
        project: "@TarsusWord/WordNodeServer -l node -t @tarsus/ms -h 127.0.0.1 -p 14002",
        database: {
            default: true,
            type: "mysql",
            host: "127.0.0.1",
            user: "root",
            password: "123456",
            database: "word_server", //所用数据库
            port: 3306,
            connectionLimit: 10,
        },
    },
    proxy:"http://localhost:14001/proxy/invoke"
};
