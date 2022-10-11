const Model = require('./model');
module.exports =
    class Bookmark extends Model {
        constructor(categorie, titre, texte, imageurl, date) {
            super();
            this.Categorie = categorie !== undefined ? categorie : "";
            this.Titre = titre !== undefined ? titre : "";
            this.Texte = texte !== undefined ? texte : "";
            this.ImageUrl = imageurl !== undefined ? imageurl : "";
            this.Date = date !== undefined ? date : "";

            this.setKey("Titre");
            this.addValidator('Categorie', 'string');
            this.addValidator('Titre', 'string');
            this.addValidator('Texte', 'string');
            this.addValidator('ImageUrl', 'url');
            this.addValidator('Date', 'integer');
            
        }
    }