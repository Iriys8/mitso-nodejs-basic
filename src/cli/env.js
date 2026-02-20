const parseEnv = () => {
    console.log(Object.keys(process.env).filter(item => item.includes("MITSO_")));
};

parseEnv();