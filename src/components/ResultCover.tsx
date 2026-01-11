import { images } from '../assets/images';

type ResultCoverProps = {
  resultCode: string;
};


const resultImages: Record<string, string> = {
  'AAAAA': '/images/results/AAAAA.png',
  'AAAAB': '/images/results/AAAAB.png',
  'AAABA': '/images/results/AAABA.png',
  'AABAA': '/images/results/AABAA.png',
  'AABBA': '/images/results/AABBA.png',
  'ABAAA': '/images/results/ABAAA.png',
  'ABAAB': '/images/results/ABAAB.png',
  'AAABB': '/images/results/AAABB.png',
  'BBBBB': '/images/results/BBBBB.png',
  'BBBBA': '/images/results/BBBBA.png',
  'AABAB': '/images/results/AABAB.png',
  'ABABA': '/images/results/ABABA.png',
  'BBAAA': '/images/results/BBAAA.png',
  'BAAAB': '/images/results/BAAAB.png',
  'BABAA': '/images/results/BABAA.png',
  'BAABB': '/images/results/BAABB.png',
  'BBAAB': '/images/results/BBAAB.png',
  'BBABA': '/images/results/BBABA.png',
  'BABAB': '/images/results/BABAB.png',
  'ABABB': '/images/results/ABABB.png',
  'ABBAA': '/images/results/ABBAA.png',
  'ABBAB': '/images/results/ABBAB.png',
  'ABBBA': '/images/results/ABBBA.png',
  'ABBBB': '/images/results/ABBBB.png',
  'BAAAA': '/images/results/BAAAA.png',
  'BAABA': '/images/results/BAABA.png',
  'BABBA': '/images/results/BABBA.png',
  'BABBB': '/images/results/BABBB.png',
  'BBABB': '/images/results/BBABB.png',
  'BBBAB': '/images/results/BBBAB.png',
};

const ResultCover = ({ resultCode }: ResultCoverProps) => {
  const resultImagePath = resultImages[resultCode] || '/output.lin.jpg';

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background - cover toàn màn hình */}
      <div className="absolute inset-0">
        <img
          src={images.layer1}
          alt=""
          className="w-full h-full object-cover pointer-events-none"
        />
        <img
          src={images.layer6}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none"
        />
      </div>


      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 py-4">
        <div className="relative w-full max-w-[500px] md:max-w-[700px] lg:max-w-[850px]">

          <div className="absolute left-0 right-0 -top-[0.5rem] text-center z-10">
            <h1 className="font-bold text-[28px] md:text-[48px] text-[#00000] italic">
              Kết quả của bạn
            </h1>
            <p className="text-[12px] md:text-[16px] text-gray-500 italic">
              * Kết quả chỉ mang tính chất tham khảo
            </p>
          </div>

          <img
            src={resultImagePath}
            alt={`Kết quả nhóm lens: ${resultCode}`}
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).src = '/output.lin.jpg';
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ResultCover;
