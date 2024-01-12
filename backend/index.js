import express from "express"

const app = express();



app.get('/api', (req, res) => {
    const music = [
        {
            id: '0',
            music_name: 'Baatein',
            url : 'https://cloud.appwrite.io/v1/storage/buckets/6595874620980f8290cf/files/65958925951c49581edf/view?project=659584d638ed72858bf7&mode=admin',
            thumbnail: 'https://res.cloudinary.com/dpg78zw9q/image/upload/v1704969538/_0305fd8d-bb38-40c5-87d2-1c630c8804f9_dhrzrn.jpg',
            artist : 'aur'
        },
        {
            id: '1',
            music_name: 'Dooriyan',
            url : 'https://cloud.appwrite.io/v1/storage/buckets/659fdeb8d8e0c03446ba/files/65a01806c465a80c2cdc/view?project=659584d638ed72858bf7&mode=admin',
            thumbnail: '',
            artist : 'aur',
        },
        {
            id: '2',
            music_name: 'Kahan',
            url : 'https://cloud.appwrite.io/v1/storage/buckets/659fdeb8d8e0c03446ba/files/659fdee314bed80f7748/view?project=659584d638ed72858bf7&mode=admin',
            thumbnail: '',
            artist : 'aur'
        },
        {
            id: '3',
            music_name: 'No way to nowhere',
            url : 'https://cloud.appwrite.io/v1/storage/buckets/659fdeb8d8e0c03446ba/files/659fdf112bd142e0757f/view?project=659584d638ed72858bf7&mode=admin',
            thumbnail: '',
            artist : 'aur'
        },
        {
            id: '4',
            music_name: 'Rastay',
            url : '',
            thumbnail: 'https://cloud.appwrite.io/v1/storage/buckets/6595874620980f8290cf/files/6596198081b7895a48f1/view?project=659584d638ed72858bf7&mode=admin',
            artist : 'aur'
        },
        {
            id: '5',
            music_name: 'Shayad',
            url : '',
            thumbnail: 'https://cloud.appwrite.io/v1/storage/buckets/6595874620980f8290cf/files/65961c73dc98e4f1d9c4/view?project=659584d638ed72858bf7&mode=admin',
            artist : 'aur'
        },
        {
            id: '6',
            music_name: 'Tu hai kahan',
            url : 'https://cloud.appwrite.io/v1/storage/buckets/659fdeb8d8e0c03446ba/files/65a018ab594473004407/view?project=659584d638ed72858bf7&mode=admin',
            thumbnail: '',
            artist : 'aur'
        },
        {
            id: '7',
            music_name: 'Long time no see',
            url : 'https://cloud.appwrite.io/v1/storage/buckets/659fdeb8d8e0c03446ba/files/65a0189303b04eb292d8/view?project=659584d638ed72858bf7&mode=admin',
            thumbnail: '',
            artist : 'aur'
        }
    ]
    res.json(music)
})


let port = 3000
app.listen(port, () =>{
console.log('server is online ${port}');
})