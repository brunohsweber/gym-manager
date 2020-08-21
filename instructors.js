const fs = require("fs");
const data = require("./data.json");
const { age, date } = require("./utils");
const Intl = require("intl");

// INDEX
exports.index = function (req, res) {
  return res.render("instructors/index");
};

// SHOW
exports.show = function (req, res) {
  const { id } = req.params;

  const foundInstructor = data.instructors.find(function (instructor) {
    return instructor.id == id;
  });

  if (!foundInstructor) {
    return res.send("Instructor not found!");
  }

  const instructor = {
    ...foundInstructor,
    age: age(foundInstructor.birth),
    services: foundInstructor.services.split(","),
    created_at: new Intl.DateTimeFormat("pt-BR").format(
      foundInstructor.created_at
    ),
  };

  return res.render("instructors/show", { instructor });
};

// EDIT
exports.edit = function (req, res) {
  const { id } = req.params;

  const foundInstructor = data.instructors.find(function (instructor) {
    return instructor.id == id;
  });

  if (!foundInstructor) {
    return res.send("Instructor not found!");
  }

  const instructor = {
    ...foundInstructor,
    birth: date(foundInstructor.birth).iso,
  };

  return res.render("instructors/edit", { instructor });
};

// CREATE
exports.create = function (req, res) {
  return res.render("instructors/create");
};

// POST
exports.post = function (req, res) {
  // Validação se todos os campos estão preenchidos
  const keys = Object.keys(req.body);

  for (key of keys) {
    if (req.body[key] == "") {
      return res.send("Please, fill all fields");
    }
  }

  let { avatar_url, name, birth, services, gender } = req.body;

  birth = Date.parse(birth);

  const id = Number(data.instructors.length + 1);
  const created_at = Date.now();

  data.instructors.push({
    id,
    avatar_url,
    name,
    birth,
    services,
    gender,
    created_at,
  });

  fs.writeFile("data.json", JSON.stringify(data, null, 2), function (err) {
    if (err) {
      return res.send("Write file error!");
    }

    return res.redirect("/instructors");
  });

  // Se estiver tudo preenchido, retorna os dados
  //return res.send(req.body);
};
