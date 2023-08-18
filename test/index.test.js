const app = require('../src/app');
const session = require('supertest');
const request = session(app);

const character = {
    id:923,
    name:"dai",
    species: "human",
    gender: "female",
    status: "alive",
    origin:{name:"earth C134"},
    image:"image.jpg"
}

describe("Test de RUTAS",()=>{
    describe("GET /rickandmorty/character/:id",()=>{
        it("Responde con status: 200",async ()=>{
           const response = await request.get('/rickandmorty/character/1');
           expect(response.statusCode).toBe(200);
        })
        it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"',async()=>{
           const response = await request.get('/rickandmorty/character/1');
           const props= ["id","name", "species", "gender", "status", "origin","image"]
           props.forEach(prop=>{
             expect(response.body).toHaveProperty(prop)
           })
        });
        it('Si hay un error responde con status: 500', async()=>{
            const response = await request.get('/rickandmorty/character/abc');
            expect(response.statusCode).toBe(500)
        })
    })
    describe("GET /rickandmorty/login", ()=>{
        it("Responde con un objeto con la propiedad access en true si la información es válida", async()=>{
            const response = await request.get("/rickandmorty/login?email=fabri_501@hotmail.com&password=1234abcd");
            expect(response.body).toEqual({
                access: true
            })
        })
        it("Responde con un objeto con la propiedad access en false si la información no es válida", async()=>{
            const response = await request.get("/rickandmorty/login?email=fabri_501@mail.com&password=14abcd");
            expect(response.body).toEqual({access:false})
        })
    })
    describe("POST /rickandmorty/fav",()=>{
        it("Debe guardar el personaje en favoritos",async()=>{
            const response = await request.post("/rickandmorty/fav").send(character);
            expect(response.body).toContainEqual(character)
        })
        it("Debe agregar personajes a favoritos sin eliminar los que ya existian",async()=>{
            character.id = 1212;
            character.name = "ft38";
            const response =await request.post("/rickandmorty/fav").send(character);
            expect(response.body.length).toBe(2);
        })
    })
    describe("DELETE /rickandmorty/fav/:id", ()=>{
        it("Si no hay personajes con el ID enviado debe retornar un arreglo con todos los favoritos", async()=>{
           const response = await request.delete("/rickandmorty/fav/2");
           expect(response.body.length).toBe(2);
        })
        it("El id debe ser validado, y si existe eliminarlo de favoritos",async()=>{
            const response = await request.delete("/rickandmorty/fav/1212");
            expect(response.body.length).toBe(1)
        })
    })
})