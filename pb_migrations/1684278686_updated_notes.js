migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nsoiehr2hyten62")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "btfl3z6b",
    "name": "field",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nsoiehr2hyten62")

  // remove
  collection.schema.removeField("btfl3z6b")

  return dao.saveCollection(collection)
})
