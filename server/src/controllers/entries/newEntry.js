const insertEntryQuery = require("../../models/entries/insertEntryQuery");
const insertPhotoQuery = require("../../models/entries/insertPhotoQuery");

const { generateError, savePhoto } = require("../../../helpers");

const newEntry = async (req, res, next) => {
  try {
    const { title, city, neightborhood, district, description } = req.body;

    if (!title || !city || !neightborhood || !district || !description) {
      generateError("Faltan campos", 400);
    }

    const entry = await insertEntryQuery(
      req.user.id,
      title,
      city,
      neightborhood,
      district,
      description
    );

    // Variable que almacenará un array de fotos;
    const photos = [];

    // Si existe el objeto files vamos a recorrer sus valores.
    if (req.files) {
      for (const photo of Object.values(req.files).slice(0, 3)) {
        // Guardamos la foto en la carpeta Uploads y obtenemos su nombre.
        photoName = await savePhoto(photo, 500);

        // Guardamos la foto en la base de datos.
        const newPhoto = await insertPhotoQuery(photoName, entry.id)

        // Pusheamos la foto al array de fotos.
        photos.push(newPhoto)
      }
    }

    res.send({
      status: "ok",
      data: {
        entry: {
          ...entry,
          photos
        },
      },
    });
  } catch (err) {
    next(err);
  }
};

module.exports = newEntry;
