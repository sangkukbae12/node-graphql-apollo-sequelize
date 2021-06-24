const bcrypt = require("bcryptjs");

const resolvers = {
  Query: {
    async user(root, { id }, { models }) {
      return models.User.findByPk(id);
    },
    async allRecipes(root, args, { models }) {
      return models.Recipe.findAll();
    },
    async recipe(root, { id }, { models }) {
      return models.Recipe.findByPk(id);
    }
  },
  Mutation: {
    async createUser(root, { name, email, password }, { models }) {
      return models.User.create({
        name,
        email,
        password: await bcrypt.hash(password, 10)
      });
    },
    async createRecipe(
      root,
      { userId, title, ingredients, direction },
      { models }
    ) {
      return models.Recipe.create({ userId, title, ingredients, direction });
    }
  },
  User: {
    async recipes(user) {
      return user.getRecipes();
    }
  },
  Recipe: {
    async user(recipe) {
      return recipe.getUser();
    }
  }
};

module.exports = resolvers;
