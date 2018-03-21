threeDShapes = {

    Cube: function (width, height, depth) {     

        var threedscene = new THREE.Scene();

        var viewCamera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

        var renderer = new THREE.WebGLRenderer();
        //change the background color
        renderer.setClearColor(0xffffff, 0);
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        //giving measurements to the object
        var geometry = new THREE.BoxGeometry(width, height, depth);
        //change the object color
        var material = new THREE.MeshBasicMaterial({ color: 0x83A2D2 });
        var cube = new THREE.Mesh(geometry, material);
        threedscene.add(cube);

        viewCamera.position.z = 5;

        /*
         This is for the animation
        */
        var animateFunction = function () {
            requestAnimationFrame(animateFunction);

            cube.rotation.x += 0.001;
            cube.rotation.y += 0.001;

            renderer.render(threedscene, viewCamera);
        };

        animateFunction();
    }


}