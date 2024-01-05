import express from "express"

const app = express();



app.get('/api', (req, res) => {
    const music = [
        {
            id: '0',
            music_name: 'Baatein',
            url : 'https://cloud.appwrite.io/v1/storage/buckets/6595874620980f8290cf/files/65958925951c49581edf/view?project=659584d638ed72858bf7&mode=admin',
            thumbnail: '',
            artist : 'aur'
        },
        {
            id: '1',
            music_name: 'Dooriyan',
            url : 'https://cloud.appwrite.io/v1/storage/buckets/6595874620980f8290cf/files/659617e1656854f6787a/view?project=659584d638ed72858bf7&mode=admin',
            thumbnail: '',
            artist : 'aur'
        },
        {
            id: '2',
            music_name: 'Kahan',
            url : 'https://cloud.appwrite.io/v1/storage/buckets/6595874620980f8290cf/files/65961821b3c882a16ceb/view?project=659584d638ed72858bf7&mode=admin',
            thumbnail: '',
            artist : 'aur'
        },
        {
            id: '3',
            music_name: 'No way to nowhere',
            url : 'https://cloud.appwrite.io/v1/storage/buckets/6595874620980f8290cf/files/659618c8948fe1449aec/view?project=659584d638ed72858bf7&mode=admin',
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
            url : 'https://cloud.appwrite.io/v1/storage/buckets/6595874620980f8290cf/files/65961c6a4b012128ad5a/view?project=659584d638ed72858bf7&mode=admin',
            thumbnail: '',
            artist : 'aur'
        },
        {
            id: '7',
            music_name: 'Us',
            url : 'https://cloud.appwrite.io/v1/storage/buckets/6595874620980f8290cf/files/65961c73dc036b33b2a4/view?project=659584d638ed72858bf7&mode=admin',
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