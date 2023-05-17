migrate((db) => {
  const collection = new Collection({
    "id": "nsoiehr2hyten62",
    "created": "2023-05-16 23:10:12.030Z",
    "updated": "2023-05-16 23:10:12.030Z",
    "name": "notes",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "favftxxu",
        "name": "title",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("nsoiehr2hyten62");

  return dao.deleteCollection(collection);
})
