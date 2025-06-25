import { useEffect, useState } from 'react'
import { keepPreviousData, useQuery } from '@tanstack/react-query'
import Section from '../Section/Section'
import Container from '../Container/Container'
import Form from '../Form/Form'
import PhotosGallery from '../PhotosGallery/PhotosGallery'
import Modal from '../Modal/Modal'
import { type Photo } from '../../types/photo'
import { getPhotos } from '../../services/photos'
// import ReactPaginate from 'react-paginate'
import toast from 'react-hot-toast'
import Loader from '../Loader/Loader'

export default function App() {
    const [query, setQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [photoModal, setPhotoModal] = useState<Photo | null>(null);

    const { data, isLoading, isSuccess } = useQuery({
        queryKey: ['photo', query],
        queryFn: () => getPhotos(query, currentPage),
        enabled: query !== '',
        placeholderData: keepPreviousData,
    });
    
    const handleSearch = (query: string) => {
        setQuery(query);
        setCurrentPage(1);
    }

    useEffect(() => {
        if (isSuccess && data.total_results === 0) {
            toast.error('No photos found for your request.')
        }
    }, [data, isSuccess])

    // const totalPages = data?.total_results && data?.per_page
    //     ? Math.ceil(data.total_results / data.per_page) : 0

    const openModal = (photo: Photo) => setPhotoModal(photo);
    const closeModal = () => setPhotoModal(null)


    return (
        <>
            {isLoading && <Loader/>}
            <Section>
                <Container>
                    <Form onSubmit={handleSearch} />
                    <PhotosGallery photos={data?.photos ?? []} onSelect={openModal}/>
                    {photoModal && <Modal onClose={closeModal} photo={photoModal}/>}
                </Container>
            </Section>
        </>
    )
}