AFRAME.registerComponent("bullets", {
    init: function(){
        this.shootBullet();
    },
    shootBullet: function(){
        window.addEventListener("keydown", (e) => {
            if(e.key === "z"){
                var bullet = document.createElement("a-entity");

                bullet.setAttribute("geometry", {
                    primitive: "sphere",
                    radius: 0.1
                });

                bullet.setAttribute("material", "color", "black");

                var cam = document.querySelector("#camera");

                pos = cam.getAttribute("position");

                bullet.setAttribute("position", {
                    x: pos.x,
                    y: pos.y,
                    z: pos.z
                });

                
                var camera = document.querySelector("#camera").object3D; //fetching the camera as a the object of Three.js

                var direction = new THREE.Vector3(); //creating an object of THREE.Vector3()
                camera.getWorldDirection(direction); //it will set the value of vector inside the direction variable (trying to get the direction of camera element)
                
                bullet.setAttribute("velocity", direction.multiplyScalar(-10)); //scalar is a quantity with only magnitude and vector are quantities with magnitude and direction

                var scene = document.querySelector("#scene");

                scene.appendChild(bullet);
            }
        });
    }
});