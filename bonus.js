let john = { name: "john", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };
let users = [john, pete, mary];

let result = new Array(users.length); // 미리 배열 크기 확보

for (let i = 0; i < users.length; i++) {
    result[i] = {
        fullName: `${users[i].name} ${users[i].surname}`,
        id: users[i].id,
    };
}

console.log(result);
