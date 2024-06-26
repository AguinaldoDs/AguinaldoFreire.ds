// app/Components/Carrossel.tsx
import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

const Carrossel: FC = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      <SwiperSlide><div style={{ background: '', height: '500px' }}
                        className='flex justify-center items-center'>
                        <div
                        className='bg-red-500'
                        > 
                            Testando 
                        </div>  
                   </div>
      </SwiperSlide>

      <SwiperSlide><div style={{ background: '', height: '500px' }}>Slide 2</div></SwiperSlide>
      <SwiperSlide><div style={{ background: '', height: '500px' }}>Slide 3</div></SwiperSlide>
      <SwiperSlide><div style={{ background: '', height: '500px' }}>Slide 4</div></SwiperSlide>
    </Swiper>
  );
};

export default Carrossel;
