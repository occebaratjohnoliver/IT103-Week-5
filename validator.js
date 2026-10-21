
const account = {
    username: "johnebarat",
    password: "Occ2026!",
    age: 20,
    status: "active",
    email: "occ.ebarat.johnoliver@example.com"
};

function validate(data) {
    const errors = [];

    if (!data) {
        errors.push("Account data is missing");
        return errors;
    }

    if (Object.keys(data).length === 0) {
        errors.push("Account data is empty");
        return errors;
    }

    if (!data.username || data.username.length < 4) {
        errors.push("Username must be at least 4 characters");
    }

    if (!data.password || data.password.length < 8) {
        errors.push("Password must be at least 8 characters");
    }

    if (data.age < 16 || data.age > 70 || data.age == null) {
        errors.push("Age must be between 16 and 70");
    }

    if (data.status !== "active") {
        errors.push("Account is not active");
    }

    if (!(data.age >= 18 && data.status === "active")) {
        errors.push("Account must be active and age 18 or older");
    }

    return errors;
}

const validAccount = {
    username: "johnebarat",
    password: "Occ2026!",
    age: 19,
    status: "active",
    email: "occ.ebarat.johnoliver@example.com"
};

const partlyInvalidAccount = {
    username: "jay",
    password: "123",
    age: 19,
    status: "inactive",
    email: "jay@example.com"
};

const emptyAccount = {};

console.log("Valid Account:", validate(validAccount));
console.log("Partly Invalid Account:", validate(partlyInvalidAccount));
console.log("Empty Account:", validate(emptyAccount));
