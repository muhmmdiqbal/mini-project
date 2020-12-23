// import { ReactComponent } from '*.svg';
import { Component } from 'react';
// import Image from '../Homepages/assets/black-clover 1.svg'

class Database1 extends Component {
    constructor () {
        super ()
        this.state = {
            data: [
                {   
                    image: 'url(https://m.media-amazon.com/images/M/MV5BNTAzYTlkMWEtOTNjZC00ZDU0LWI5ODUtYTRmYzY0MTAzYWZlXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_UY1200_CR85,0,630,1200_AL_.jpg)',
                    title: 'Black Clover',
                    genre: 'anime',
                    id: '1'
                    
                },
                {
                    image: 'url(https://m.media-amazon.com/images/M/MV5BNTAzYTlkMWEtOTNjZC00ZDU0LWI5ODUtYTRmYzY0MTAzYWZlXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_UY1200_CR85,0,630,1200_AL_.jpg)',
                    title: 'Black Clover',
                    genre: 'anime',
                    id: '2'
                    
                },
                {
                    image: 'url(https://m.media-amazon.com/images/M/MV5BNTAzYTlkMWEtOTNjZC00ZDU0LWI5ODUtYTRmYzY0MTAzYWZlXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_UY1200_CR85,0,630,1200_AL_.jpg)',
                    title: 'Black Clover',
                    genre: 'anime',
                    id: '3'
                    
                },
                {
                    image: 'url(https://m.media-amazon.com/images/M/MV5BNTAzYTlkMWEtOTNjZC00ZDU0LWI5ODUtYTRmYzY0MTAzYWZlXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_UY1200_CR85,0,630,1200_AL_.jpg)',
                    title: 'Black Clover',
                    genre: 'anime',
                    id: '4'
                    
                },
                {
                    image: 'url(https://m.media-amazon.com/images/M/MV5BNTAzYTlkMWEtOTNjZC00ZDU0LWI5ODUtYTRmYzY0MTAzYWZlXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_UY1200_CR85,0,630,1200_AL_.jpg)',
                    title: 'Black Clover',
                    genre: 'anime',
                    id: '5'
                },
                {
                    image: 'url(https://m.media-amazon.com/images/M/MV5BNTAzYTlkMWEtOTNjZC00ZDU0LWI5ODUtYTRmYzY0MTAzYWZlXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_UY1200_CR85,0,630,1200_AL_.jpg)',
                    title: 'Black Clover',
                    genre: 'anime',
                    id: '6'
                },
                {
                    image: 'url(https://m.media-amazon.com/images/M/MV5BNTAzYTlkMWEtOTNjZC00ZDU0LWI5ODUtYTRmYzY0MTAzYWZlXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_UY1200_CR85,0,630,1200_AL_.jpg)',
                    title: 'Black Clover',
                    genre: 'anime',
                    id: '7'
                },
                {
                    image: 'url(https://m.media-amazon.com/images/M/MV5BNTAzYTlkMWEtOTNjZC00ZDU0LWI5ODUtYTRmYzY0MTAzYWZlXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_UY1200_CR85,0,630,1200_AL_.jpg)',
                    title: 'Black Clover',
                    genre: 'anime',
                    id: '8'
                },
                {
                    image: 'url(https://m.media-amazon.com/images/M/MV5BNTAzYTlkMWEtOTNjZC00ZDU0LWI5ODUtYTRmYzY0MTAzYWZlXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_UY1200_CR85,0,630,1200_AL_.jpg)',
                    title: 'Black Clover',
                    genre: 'anime',
                    id: '9'
                },
                {
                    image: 'url(https://m.media-amazon.com/images/M/MV5BNTAzYTlkMWEtOTNjZC00ZDU0LWI5ODUtYTRmYzY0MTAzYWZlXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_UY1200_CR85,0,630,1200_AL_.jpg)',
                    title: 'Black Clover',
                    genre: 'anime',
                    id: '10'
                },
                {
                    image: 'url(https://m.media-amazon.com/images/M/MV5BNTAzYTlkMWEtOTNjZC00ZDU0LWI5ODUtYTRmYzY0MTAzYWZlXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_UY1200_CR85,0,630,1200_AL_.jpg)',
                    title: 'Black Clover',
                    genre: 'anime',
                    id: '11'
                },
                {
                    image: 'url(https://m.media-amazon.com/images/M/MV5BNTAzYTlkMWEtOTNjZC00ZDU0LWI5ODUtYTRmYzY0MTAzYWZlXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_UY1200_CR85,0,630,1200_AL_.jpg)',
                    title: 'Black Clover',
                    genre: 'anime',
                    id: '12'
                },
                {
                    image: 'url(https://m.media-amazon.com/images/M/MV5BNTAzYTlkMWEtOTNjZC00ZDU0LWI5ODUtYTRmYzY0MTAzYWZlXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_UY1200_CR85,0,630,1200_AL_.jpg)',
                    title: 'Black Clover',
                    genre: 'anime',
                    id: '13'
                },
                {
                    image: 'url(https://m.media-amazon.com/images/M/MV5BNTAzYTlkMWEtOTNjZC00ZDU0LWI5ODUtYTRmYzY0MTAzYWZlXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_UY1200_CR85,0,630,1200_AL_.jpg)',
                    title: 'Black Clover',
                    genre: 'anime',
                    id: '14'
                },
                {
                    image: 'url(https://m.media-amazon.com/images/M/MV5BNTAzYTlkMWEtOTNjZC00ZDU0LWI5ODUtYTRmYzY0MTAzYWZlXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_UY1200_CR85,0,630,1200_AL_.jpg)',
                    title: 'Black Clover',
                    genre: 'anime',
                    id: '15'
                },
                {
                    image: 'url(https://m.media-amazon.com/images/M/MV5BNTAzYTlkMWEtOTNjZC00ZDU0LWI5ODUtYTRmYzY0MTAzYWZlXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_UY1200_CR85,0,630,1200_AL_.jpg)',
                    title: 'Black Clover',
                    genre: 'anime',
                    id: '16'
                },
                {
                    image: 'url(https://m.media-amazon.com/images/M/MV5BNTAzYTlkMWEtOTNjZC00ZDU0LWI5ODUtYTRmYzY0MTAzYWZlXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_UY1200_CR85,0,630,1200_AL_.jpg)',
                    title: 'Black Clover',
                    genre: 'anime',
                    id: '17'
                },
                {
                    image: 'url(https://m.media-amazon.com/images/M/MV5BNTAzYTlkMWEtOTNjZC00ZDU0LWI5ODUtYTRmYzY0MTAzYWZlXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_UY1200_CR85,0,630,1200_AL_.jpg)',
                    title: 'Black Clover',
                    genre: 'anime',
                    id: '18'
                },
            ]
        }
    }
}

export default Database1;

