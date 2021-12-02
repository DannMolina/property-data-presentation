/**
 * Loader component
 */
import React from 'react';
import Lottie from 'reactjs-lottie';
import animation from '../assets/animation/loader.json';

/**
 * @returns Default Loader
 */
const LoaderComponent = () => (
    <Lottie
        width={'20%'}
        options={{
            animationData: animation,
        }}
    />
);

export default LoaderComponent;
