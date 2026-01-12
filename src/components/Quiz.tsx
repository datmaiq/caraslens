import { useState, useEffect } from 'react';
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

// Quiz person images - renamed for clarity
const quizImages = {
  q1a: '/images/quiz/q1a.png', // Câu 1 - Option A: Trắng sáng
  q1b: '/images/quiz/q1b.png', // Câu 1 - Option B: Nâu mật ong
  q2a: '/images/quiz/q2a.png', // Câu 2 - Option A: Mắt mí lót
  q2b: '/images/quiz/q2b.png', // Câu 2 - Option B: Mắt to tròn
  q3a: '/images/quiz/q3a.png', // Câu 3 - Option A: Góc cạnh
  q3b: '/images/quiz/q3b.png', // Câu 3 - Option B: Bầu bĩnh
  q4a: '/images/quiz/q4a.png', // Câu 4 - Option A: Mắt đen
  q4b: '/images/quiz/q4b.png', // Câu 4 - Option B: Mắt nâu
  q5a: '/images/quiz/q5a.png', // Câu 5 - Option A: Nàng thơ
  q5b: '/images/quiz/q5b.png', // Câu 5 - Option B: Quý cô
};

const questions: QuestionData[] = [
  {
    question: 'Câu 1: Bạn sở hữu tone da nào?',
    optionA: {
      title: 'A: Trắng sáng rạng rỡ',
      subtitle: 'Làn da bắt sáng, tone lạnh hoặc trung tính',
      image: quizImages.q1a,
      frame: images.group7,
    },
    optionB: {
      title: 'B: Nâu mật ong khoẻ khoắn',
      subtitle: 'Làn da bánh mật, tone ấm đầy sức sống',
      image: quizImages.q1b,
      frame: images.rectangle2,
    },
    decorRight: images.layer11,
  },
  {
    question: 'Câu 2: Dáng mắt tự nhiên của bạn?',
    optionA: {
      title: 'A: Mắt mí lót / Á Đông',
      subtitle: 'Nhỏ nhắn, cuốn hút nét riêng',
      image: quizImages.q2a,
      frame: images.rectangle4,
    },
    optionB: {
      title: 'B: Mắt to tròn long lanh',
      subtitle: 'Hai mí rõ, to tròn như búp bê',
      image: quizImages.q2b,
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
      image: quizImages.q3a,
      frame: images.rectangle8,
    },
    optionB: {
      title: 'B: Bầu bĩnh mềm mại',
      subtitle: 'Gương mặt tròn đầy, nữ tính',
      image: quizImages.q3b,
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
      image: quizImages.q4a,
      frame: images.rectangle10,
    },
    optionB: {
      title: 'B: Nâu hạt dẻ ấm áp',
      subtitle: 'Màu mắt sáng, ánh nâu nhẹ',
      image: quizImages.q4b,
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
      image: quizImages.q5a,
      frame: images.rectangle12,
    },
    optionB: {
      title: 'B: Quý cô thần thái',
      subtitle: 'Makeup Tây, sắc sảo và cá tính',
      image: quizImages.q5b,
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

  // Preload next question images
  useEffect(() => {
    if (currentStep >= 1 && currentStep < 5) {
      const nextQuestion = questions[currentStep]; // currentStep is 1-indexed, so this gets next question
      if (nextQuestion) {
        const imgA = new Image();
        const imgB = new Image();
        imgA.src = nextQuestion.optionA.image;
        imgB.src = nextQuestion.optionB.image;
      }
    }
  }, [currentStep]);

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
                Email
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
                  placeholder="Nhập Email của bạn"
                  className="relative w-full h-[74px] px-8 text-[18px] md:text-[22px] bg-transparent rounded-full focus:outline-none focus:border-pink-400 placeholder:text-gray-300"
                  aria-label="Nhập Email của bạn"
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

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center pt-[30px] lg:pt-[40px] px-4">
        {/* Progress indicator - line style - same width as options */}
        <div className="w-full max-w-[320px] md:max-w-[420px] lg:max-w-[1100px] px-4 mb-6 lg:mb-10">
          <div className="relative h-[5px] bg-white/60 rounded-full">
            {/* Filled portion */}
            <div 
              className="absolute left-0 top-0 h-full bg-[#C74C8F] rounded-full transition-all duration-500"
              style={{ width: `${(currentStep / 5) * 100}%` }}
            />
            {/* Circle indicator */}
            <div 
              className="absolute top-1/2 -translate-y-1/2 w-4 h-4 lg:w-5 lg:h-5 bg-[#C74C8F] rounded-full shadow-md transition-all duration-500"
              style={{ left: `calc(${(currentStep / 5) * 100}% - 8px)` }}
            />
          </div>
        </div>

        {/* Question */}
        <h2 className="font-semibold text-[24px] md:text-[32px] lg:text-[46px] text-black tracking-wide text-center mb-6 md:mb-8 lg:mb-12">
          {questionData.question}
        </h2>

        {/* Options - vertical on mobile/tablet, horizontal on desktop (lg:1024px+) */}
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 w-full max-w-[1100px] justify-center items-center lg:items-start mx-auto">
          {/* Option A */}
          <button
            onClick={() => handleSelectAnswer('A')}
            className="relative group cursor-pointer transition-all duration-300 transform hover:scale-[1.02] rounded-3xl outline-none flex flex-col items-center"
            tabIndex={0}
            aria-label={questionData.optionA.title}
          >
            {/* Frame + Person image */}
            <div className="relative w-[280px] md:w-[380px] lg:w-[476px] h-[280px] md:h-[420px] lg:h-[700px] overflow-hidden rounded-2xl lg:rounded-3xl border-[3px] lg:border-[5px] border-[#E8A4C4] bg-gradient-to-b from-white to-[#FFE3F2]">
              {/* Person image */}
              <img
                key={`optionA-${currentStep}`}
                src={questionData.optionA.image}
                alt={questionData.optionA.title}
                className="absolute inset-[4px] lg:inset-[6px] w-[calc(100%-8px)] lg:w-[calc(100%-12px)] h-[calc(100%-8px)] lg:h-[calc(100%-12px)] object-cover z-10 rounded-xl lg:rounded-2xl"
              />
              
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-pink-500/0 group-hover:bg-pink-500/10 transition-all duration-300 z-20 rounded-2xl lg:rounded-3xl" />
            </div>

            {/* Text */}
            <div className="text-center mt-4">
              <h3 className="font-bold text-[20px] md:text-[28px] lg:text-[38px] text-[#282828] uppercase tracking-tight">
                {questionData.optionA.title}
              </h3>
              <p className="text-[14px] md:text-[18px] lg:text-[23px] text-[#282828] mt-1">
                {questionData.optionA.subtitle}
              </p>
            </div>
          </button>

          {/* Option B */}
          <button
            onClick={() => handleSelectAnswer('B')}
            className="relative group cursor-pointer transition-all duration-300 transform hover:scale-[1.02] rounded-3xl outline-none flex flex-col items-center"
            tabIndex={0}
            aria-label={questionData.optionB.title}
          >
            {/* Frame + Person image */}
            <div className="relative w-[280px] md:w-[380px] lg:w-[476px] h-[280px] md:h-[420px] lg:h-[700px] overflow-hidden rounded-2xl lg:rounded-3xl border-[3px] lg:border-[5px] border-[#E8A4C4] bg-gradient-to-b from-white to-[#FFE3F2]">
              {/* Person image */}
              <img
                key={`optionB-${currentStep}`}
                src={questionData.optionB.image}
                alt={questionData.optionB.title}
                className="absolute inset-[4px] lg:inset-[6px] w-[calc(100%-8px)] lg:w-[calc(100%-12px)] h-[calc(100%-8px)] lg:h-[calc(100%-12px)] object-cover z-10 rounded-xl lg:rounded-2xl"
              />
              
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-pink-500/0 group-hover:bg-pink-500/10 transition-all duration-300 z-20 rounded-2xl lg:rounded-3xl" />
            </div>

            {/* Text */}
            <div className="text-center mt-4">
              <h3 className="font-bold text-[20px] md:text-[28px] lg:text-[38px] text-[#282828] uppercase tracking-tight">
                {questionData.optionB.title}
              </h3>
              <p className="text-[14px] md:text-[18px] lg:text-[23px] text-[#282828] mt-1">
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

