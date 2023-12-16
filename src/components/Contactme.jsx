import React, { Suspense, useRef } from 'react';
import emailjs from '@emailjs/browser'
import { useGLTF, useAnimations } from '@react-three/drei'
import { Canvas , useFrame} from '@react-three/fiber';

export function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('scene.gltf');
  const { actions } = useAnimations(animations, group);

  useFrame((state, delta) => {
    group.current.rotation.y += 0.005; 
  });

  return (
    <group ref={group} {...props} dispose={null} scale={3}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-1.54, -0.064, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Clouds_1">
                <mesh name="Object_4" geometry={nodes.Object_4.geometry} material={materials.Clouds} />
              </group>
              <group name="Planet_2">
                <mesh name="Object_6" geometry={nodes.Object_6.geometry} material={materials.Planet} />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}


export default function Contactme() {
    //EMAIL API
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_7ptqh9q', 'template_s04ir8t', form.current, 'uoEl20P0ol1IzyO9u')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

  return (
    <div className='flex flex-col h-auto min-h-[700px] w-screen bg-background1 text-center justify-center pt-12'>
        <h1 className=' font-kanit text-white text-6xl'>Contact me</h1>
        <div className='flex md:flex-row flex-col'>
            <form ref={form} onSubmit={sendEmail} className='flex flex-col p-8 md:pl-36 text-white w-[80%] md:w-[50%] h-[500px] top-[50%] left-[50%'>
                <input type="text" name="user_name"  className='text-black m-4 w-[300px] md:w-[500px] h-[50px] rounded-xl p-2 bg-blue-500 placeholder-white' placeholder='Full Name'/>
                <input type="email" name="user_email" className='text-black m-4 w-[300px] md:w-[500px] h-[50px] rounded-xl p-2 bg-blue-500 placeholder-white'  placeholder='Your Email'/>
                <textarea name="message" className='text-black m-4 w-[300px] md:w-[500px] h-[350px] rounded-xl p-2 bg-blue-500 placeholder-white'  placeholder='Your Message'/>
                <input type="submit" value="Send"  className='text-white rounded-3xl bg-blue-500 w-32 h-12 font-bold'/>
            </form>
            <div className='w-[100%] md:w-[50%] h-[500px]'>
                <Canvas>
                    <Suspense fallback={null}>
                    <ambientLight intensity={5} color="white" />                       
                        <Model />
                    </Suspense>
                </Canvas>
            </div>
        </div>
        
    </div>
  )
}
