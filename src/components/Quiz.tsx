import { useState } from 'react';
import { images } from '../assets/images';
import ResultCover from './ResultCover';

type Answer = 'A' | 'B' | null;

type QuizState = {
  name: string;
  email: string;
  answers: Answer[];
};

type QuestionData = {
  question: string;
  optionA: {
    title: string;
    subtitle: string;
    image: string;
    frame: string;
  };
  optionB: {
    title: string;
    subtitle: string;
    image: string;
    frame: string;
  };
  decorLeft?: string;
  decorRight?: string;
};

const questions: QuestionData[] = [
  {
    question: 'Câu 1: Bạn sở hữu tone da nào?',
    optionA: {
      title: 'A: Trắng sáng rạng rỡ',
      subtitle: 'Làn da bắt sáng, tone lạnh hoặc trung tính',
      image: images.personA,
      frame: images.group7,
    },
    optionB: {
      title: 'B: Nâu mật ong khoẻ khoắn',
      subtitle: 'Làn da bánh mật, tone ấm đầy sức sống',
      image: images.personB,
      frame: images.rectangle2,
    },
    decorRight: images.layer11,
  },
  {
    question: 'Câu 2: Dáng mắt tự nhiên của bạn?',
    optionA: {
      title: 'A: Mắt mí lót / Á Đông',
      subtitle: 'Nhỏ nhắn, cuốn hút nét riêng',
      image: images.personA,
      frame: images.rectangle4,
    },
    optionB: {
      title: 'B: Mắt to tròn long lanh',
      subtitle: 'Hai mí rõ, to tròn như búp bê',
      image: images.personB,
      frame: images.rectangle7,
    },
    decorLeft: images.layer13,
    decorRight: images.layer12,
  },
  {
    question: 'Câu 3: Đường nét khuôn mặt bạn?',
    optionA: {
      title: 'A: Góc cạnh sắc sảo',
      subtitle: 'Gò má cao, xương quai hàm rõ nét',
      image: images.personA,
      frame: images.rectangle8,
    },
    optionB: {
      title: 'B: Bầu bĩnh mềm mại',
      subtitle: 'Gương mặt tròn đầy, nữ tính',
      image: images.personB,
      frame: images.rectangle9,
    },
    decorLeft: images.layer15,
    decorRight: images.layer14,
  },
  {
    question: 'Câu 4: Màu mắt nguyên bản?',
    optionA: {
      title: 'A: Đen tuyền huyền bí',
      subtitle: 'Màu mắt đậm, sâu thẳm',
      image: images.personA,
      frame: images.rectangle10,
    },
    optionB: {
      title: 'B: Nâu hạt dẻ ấm áp',
      subtitle: 'Màu mắt sáng, ánh nâu nhẹ',
      image: images.personB,
      frame: images.rectangle11,
    },
    decorLeft: images.layer16Copy2,
    decorRight: images.layer16Copy,
  },
  {
    question: 'Câu 5: Vibe mà bạn muốn hướng tới?',
    optionA: {
      title: 'A: Nàng thơ trong trẻo',
      subtitle: 'Makeup sương mai, tự nhiên như không',
      image: images.personA,
      frame: images.rectangle12,
    },
    optionB: {
      title: 'B: Quý cô thần thái',
      subtitle: 'Makeup Tây, sắc sảo và cá tính',
      image: images.personB,
      frame: images.rectangle13,
    },
    decorLeft: images.layer17,
    decorRight: images.layer16,
  },
];

const Quiz = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [quizState, setQuizState] = useState<QuizState>({
    name: '',
    email: '',
    answers: [null, null, null, null, null],
  });

  // Calculate result code from answers (e.g., "ABAAB")
  const getResultCode = (): string => {
    return quizState.answers.map((a) => a || 'A').join('');
  };

  const handleStartQuiz = () => {
    if (!quizState.name.trim() || !quizState.email.trim()) {
      return;
    }
    setCurrentStep(1);
  };

  const handleSelectAnswer = (answer: 'A' | 'B') => {
    const newAnswers = [...quizState.answers];
    newAnswers[currentStep - 1] = answer;
    setQuizState({ ...quizState, answers: newAnswers });

    // Auto advance after short delay
    setTimeout(() => {
      if (currentStep < 5) {
        setCurrentStep(currentStep + 1);
      } else {
        setCurrentStep(6); // Result page
      }
    }, 100);
  };

  // Introduction Page (Step 0)
  if (currentStep === 0) {
    return (
        <div >
      <div className="relative min-h-screen -my-10 w-full bg-white overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src={images.layer2}
            alt=""
            className="absolute left-0 top-[108px] w-full h-[1128px] object-cover pointer-events-none"
          />
          <img
            src={images.layer6}
            alt=""
            className="absolute left-[-519px] top-[-706px] w-[2537px] h-[2537px] object-contain opacity-[0.129] pointer-events-none"
          />
        </div>

        {/* Top gradient overlay */}
        <div className="absolute left-0 top-0 w-full h-[426px]">
          <img src={images.rectangle3} alt="" className="w-full h-full object-cover" />
        </div>

        {/* Content */}
        <div className="relative z-10 px-6 md:px-[97px] pt-[85px]">
          {/* Title */}
          <h1 className="font-bold text-[40px] md:text-[76px] leading-[1.1] tracking-tight text-black uppercase mb-4">
            <span className="block">5S Test nhanh</span>
            <span className="block">Màu lens cho riêng bạn</span>
          </h1>

          {/* Subtitle */}
          <p className="text-[18px] md:text-[36px] leading-[1.2] italic text-black tracking-wide mt-6 max-w-[1300px]">
            Carase đã 'đóng gói' sẵn công thức 5 giây giúp bạn tìm ra màu lens chân ái,
            <br />
            matching hoàn hảo với tone da và tôn trọn đường nét tự nhiên.
          </p>

          {/* Form Section */}
          <div className="mt-[100px] md:mt-[120px]">
            <h2 className="font-bold text-[32px] md:text-[58px] text-black text-center mb-8">
              Thông tin cá nhân
            </h2>

            {/* Name Input */}
            <div className="mb-6">
              <label className="block font-semibold text-[18px] md:text-[22px] text-black mb-2">
                Tên của bạn *
              </label>
              <div className="relative">
                <img
                  src={images.rectangle5}
                  alt=""
                  className="absolute inset-0 w-full h-full object-fill pointer-events-none"
                />
                <input
                  type="text"
                  value={quizState.name}
                  onChange={(e) => setQuizState({ ...quizState, name: e.target.value })}
                  placeholder="Nhập tên của bạn"
                  className="relative w-full h-[74px] px-8 text-[18px] md:text-[22px] bg-transparent rounded-full focus:outline-none focus:border-pink-400 placeholder:text-gray-300"
                  aria-label="Nhập tên của bạn"
                />
              </div>
            </div>

            {/* Email Input */}
            <div className="mb-8">
              <label className="block font-semibold text-[18px] md:text-[22px] text-black mb-2">
                Email để nhận voucher *
              </label>
              <div className="relative">
                <img
                  src={images.rectangle6}
                  alt=""
                  className="absolute inset-0 w-full h-full object-fill pointer-events-none"
                />
                <input
                  type="email"
                  value={quizState.email}
                  onChange={(e) => setQuizState({ ...quizState, email: e.target.value })}
                  placeholder="Nhập Email để nhận voucher"
                  className="relative w-full h-[74px] px-8 text-[18px] md:text-[22px] bg-transparent rounded-full focus:outline-none focus:border-pink-400 placeholder:text-gray-300"
                  aria-label="Nhập email để nhận voucher"
                />
              </div>
            </div>

            {/* Start Button */}
            <button
              onClick={handleStartQuiz}
              disabled={!quizState.name.trim() || !quizState.email.trim()}
              className="w-full  mx-auto block h-[80px] md:h-[110px] bg-gradient-to-r from-pink-400 to-pink-500 hover:from-pink-500 hover:to-pink-600 disabled:from-gray-300 disabled:to-gray-400 rounded-full text-white font-semibold text-[24px] md:text-[37px] tracking-wide transition-all duration-300 transform hover:scale-[1.02] disabled:cursor-not-allowed disabled:hover:scale-100"
              tabIndex={0}
              aria-label="Bắt đầu test"
            >
              Test ngay
            </button>
          </div>
        </div>
      </div>
      </div>
    );
  }

  // Result Page (Step 6)
  if (currentStep === 6) {
    return <ResultCover resultCode={getResultCode()} />;
  }

  // Question Pages (Step 1-5)
  const questionData = questions[currentStep - 1];

  return (
    <div className="relative min-h-screen w-full bg-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={images.layer1}
          alt=""
          className="absolute left-0 top-0 w-full h-full object-cover pointer-events-none"
        />
        <img
          src={images.layer6}
          alt=""
          className="absolute left-[-519px] top-[-706px] w-[2537px] h-[2537px] object-contain opacity-30 pointer-events-none"
        />
      </div>

      {/* Decorative elements */}
      {questionData.decorLeft && (
        <img
          src={questionData.decorLeft}
          alt=""
          className="absolute left-2 md:left-4 top-[38px] w-[80px] md:w-[150px] h-auto object-contain pointer-events-none z-10"
        />
      )}
      {questionData.decorRight && (
        <img
          src={questionData.decorRight}
          alt=""
          className="absolute right-2 md:right-4 top-[77px] w-[70px] md:w-[130px] h-auto object-contain pointer-events-none z-10"
        />
      )}

      {/* Progress indicator */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {[1, 2, 3, 4, 5].map((step) => (
          <div
            key={step}
            className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-all duration-300 ${
              step === currentStep
                ? 'bg-pink-500 scale-125'
                : step < currentStep
                ? 'bg-pink-300'
                : 'bg-gray-200'
            }`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center pt-[80px] md:pt-[117px] px-4">
        {/* Question */}
        <h2 className="font-semibold text-[24px] md:text-[46px] text-black tracking-wide text-center mb-8 md:mb-12">
          {questionData.question}
        </h2>

        {/* Options */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-12 w-full max-w-[1400px] justify-center items-center">
          {/* Option A */}
          <button
            onClick={() => handleSelectAnswer('A')}
            className={`relative group cursor-pointer transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-pink-300 rounded-3xl ${
              quizState.answers[currentStep - 1] === 'A' ? 'ring-4 ring-pink-500 scale-[1.02]' : ''
            }`}
            tabIndex={0}
            aria-label={questionData.optionA.title}
          >
            {/* Frame background */}
            <div className="relative w-[320px] md:w-[476px] h-[450px] md:h-[700px] overflow-hidden rounded-3xl">
              <img
                src={questionData.optionA.frame}
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
              />
              <img
                src={questionData.optionA.image}
                alt={questionData.optionA.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-pink-500/0 group-hover:bg-pink-500/10 transition-all duration-300" />
            </div>

            {/* Text */}
            <div className="text-center mt-4">
              <h3 className="font-bold text-[20px] md:text-[38px] text-[#282828] uppercase tracking-tight">
                {questionData.optionA.title}
              </h3>
              <p className="text-[14px] md:text-[23px] text-[#282828] mt-1">
                {questionData.optionA.subtitle}
              </p>
            </div>
          </button>

          {/* Option B */}
          <button
            onClick={() => handleSelectAnswer('B')}
            className={`relative group cursor-pointer transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-pink-300 rounded-3xl ${
              quizState.answers[currentStep - 1] === 'B' ? 'ring-4 ring-pink-500 scale-[1.02]' : ''
            }`}
            tabIndex={0}
            aria-label={questionData.optionB.title}
          >
            {/* Frame background */}
            <div className="relative w-[320px] md:w-[476px] h-[450px] md:h-[700px] overflow-hidden rounded-3xl">
              <img
                src={questionData.optionB.frame}
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
              />
              <img
                src={questionData.optionB.image}
                alt={questionData.optionB.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-pink-500/0 group-hover:bg-pink-500/10 transition-all duration-300" />
            </div>

            {/* Text */}
            <div className="text-center mt-4">
              <h3 className="font-bold text-[20px] md:text-[38px] text-[#282828] uppercase tracking-tight">
                {questionData.optionB.title}
              </h3>
              <p className="text-[14px] md:text-[23px] text-[#282828] mt-1">
                {questionData.optionB.subtitle}
              </p>
            </div>
          </button>
        </div>
      </div>

      {/* Bottom decoration */}
      {currentStep === 1 && (
        <img
          src={images.layer11Copy}
          alt=""
          className="absolute bottom-[50px] left-1/2 -translate-x-1/2 w-[120px] md:w-[179px] h-auto object-contain pointer-events-none"
        />
      )}
    </div>
  );
};

export default Quiz;

