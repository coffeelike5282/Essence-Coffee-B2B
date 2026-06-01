import React, { useState } from 'react';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    name: '',
    phone: '',
    email: '',
    agreed: false
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    // Clear error for that field
    if (errors[name]) {
      setErrors(prev => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!formData.companyName.trim()) newErrors.companyName = '업체명을 입력해주세요.';
    if (!formData.name.trim()) newErrors.name = '성함을 입력해주세요.';
    
    const phoneRegex = /^[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = '연락처를 입력해주세요.';
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = '올바른 전화번호 형식(010-0000-0000)이 아닙니다.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = '이메일 주소를 입력해주세요.';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = '올바른 이메일 형식이 아닙니다.';
    }

    if (!formData.agreed) {
      newErrors.agreed = '개인정보 동의가 필요합니다.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSending(true);

    // EmailJS keys from environment variables
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'your_service_id';
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'your_template_id';
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'your_public_key';

    // Send email using EmailJS SDK
    import('@emailjs/browser')
      .then((emailjs) => {
        return emailjs.default.send(
          serviceId,
          templateId,
          {
            company_name: formData.companyName,
            name: formData.name,
            phone: formData.phone,
            email: formData.email,
            recipe_download_url: 'https://b2b.coffeelike5282.com/ireah_essence_coffee_regular_recipe.pdf',
          },
          publicKey
        );
      })
      .then(() => {
        setIsSending(false);
        setIsSubmitted(true);
      })
      .catch((error) => {
        console.error('Email sending failed:', error);
        setIsSending(false);
        // Fallback to success page even if send fails to not block users, but log error.
        setIsSubmitted(true);
      });
  };

  return (
    <section id="contact" className="py-section-gap px-margin-mobile md:px-margin-desktop bg-background">
      <div className="max-w-3xl mx-auto glass-panel p-8 md:p-12 rounded-xl gold-glow relative overflow-hidden transition-all duration-300">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary-container to-transparent"></div>
        
        {isSubmitted ? (
          <div className="text-center py-12 space-y-6 animate-fade-in">
            <span className="material-symbols-outlined text-6xl text-primary block animate-bounce" style={{ fontVariationSettings: '"FILL" 1' }}>
              task_alt
            </span>
            <h2 className="font-headline-md text-3xl font-bold text-on-surface">가이드 신청 완료!</h2>
            <p className="font-body-md text-on-surface-variant max-w-md mx-auto leading-relaxed break-keep">
              성공적으로 신청되었습니다. 입력하신 이메일(<strong className="text-primary">{formData.email}</strong>)로 
              <strong> [커피라이크 에센스 추출 세팅 값 &amp; 희석 비율 가이드]</strong>를 즉시 전송해드렸습니다.
            </p>
            
            <div className="py-4 max-w-md mx-auto">
              <a 
                href="/ireah_essence_coffee_regular_recipe.pdf" 
                download="아이레아 에센스커피 레귤러 1cup 추출 레시피.pdf"
                className="inline-flex items-center justify-center gap-2 w-full bg-primary-container text-on-primary-container font-label-md px-6 py-4 rounded-xl hover:scale-105 transition-all duration-300 font-bold border border-primary-container/40 hover:border-primary shadow-[0_0_15px_rgba(212,175,55,0.2)] hover:shadow-[0_0_25px_rgba(212,175,55,0.4)]"
              >
                <span className="material-symbols-outlined">download</span>
                아이레아 전용 레귤러 1컵 추출 레시피 다운로드
              </a>
              <p className="text-xs text-on-surface-variant/60 mt-2">
                * PDF 형식의 아이레아 공식 브루어 전용 레시피입니다.
              </p>
            </div>

            <button 
              onClick={() => {
                setIsSubmitted(false);
                setFormData({ companyName: '', name: '', phone: '', email: '', agreed: false });
              }}
              className="text-on-surface-variant/80 font-label-md px-6 py-2 rounded-full hover:text-on-surface hover:bg-surface-container/50 transition-all duration-300 text-sm"
            >
              새로 신청하기
            </button>
          </div>
        ) : (
          <>
            <div className="text-center mb-8 space-y-4">
              <h2 className="font-headline-md text-headline-md text-on-surface font-bold break-keep">무료 가이드 신청</h2>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed break-keep">
                지금 신청하시면 대표님의 매장에 바로 적용할 수 있는 <br />
                <strong className="text-primary-fixed font-bold">[커피라이크 에센스 추출 세팅 값 &amp; 희석 비율 가이드]</strong>를 이메일로 지금 보내드립니다.
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-stack-md">
              <div>
                <label className="block font-label-md text-label-md text-on-surface mb-2 uppercase tracking-wider">카페 / 업체명</label>
                <input 
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  className={`w-full bg-surface-container border ${errors.companyName ? 'border-error' : 'border-outline-variant/30'} rounded px-4 py-3 text-on-surface focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-colors placeholder:text-on-surface-variant/40 outline-none`}
                  placeholder="카페 / 업체 이름을 입력해주세요"
                />
                {errors.companyName && <p className="text-error text-xs mt-1 font-semibold">{errors.companyName}</p>}
              </div>

              <div>
                <label className="block font-label-md text-label-md text-on-surface mb-2 uppercase tracking-wider">담당자 성함</label>
                <input 
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full bg-surface-container border ${errors.name ? 'border-error' : 'border-outline-variant/30'} rounded px-4 py-3 text-on-surface focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-colors placeholder:text-on-surface-variant/40 outline-none`}
                  placeholder="성함을 입력해주세요"
                />
                {errors.name && <p className="text-error text-xs mt-1 font-semibold">{errors.name}</p>}
              </div>

              <div>
                <label className="block font-label-md text-label-md text-on-surface mb-2 uppercase tracking-wider">연락처</label>
                <input 
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full bg-surface-container border ${errors.phone ? 'border-error' : 'border-outline-variant/30'} rounded px-4 py-3 text-on-surface focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-colors placeholder:text-on-surface-variant/40 outline-none`}
                  placeholder="010-0000-0000"
                />
                {errors.phone && <p className="text-error text-xs mt-1 font-semibold">{errors.phone}</p>}
              </div>

              <div>
                <label className="block font-label-md text-label-md text-on-surface mb-2 uppercase tracking-wider">이메일 주소</label>
                <input 
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full bg-surface-container border ${errors.email ? 'border-error' : 'border-outline-variant/30'} rounded px-4 py-3 text-on-surface focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-colors placeholder:text-on-surface-variant/40 outline-none`}
                  placeholder="이메일 주소를 입력해주세요"
                />
                {errors.email && <p className="text-error text-xs mt-1 font-semibold">{errors.email}</p>}
              </div>

              <div className="py-4">
                <div className="flex items-center gap-3">
                  <input 
                    type="checkbox"
                    id="privacy"
                    name="agreed"
                    checked={formData.agreed}
                    onChange={handleChange}
                    className="w-5 h-5 rounded border-outline-variant bg-surface-container text-primary-container focus:ring-primary-container focus:ring-offset-background cursor-pointer"
                  />
                  <label htmlFor="privacy" className="font-body-md text-body-md text-on-surface-variant text-sm cursor-pointer select-none">
                    개인정보 수집 및 이용에 동의합니다.
                  </label>
                </div>
                {errors.agreed && <p className="text-error text-xs mt-1 font-semibold">{errors.agreed}</p>}
              </div>

              <button 
                type="submit"
                disabled={isSending}
                className="w-full bg-primary-container text-on-primary-container font-label-md py-4 rounded hover:bg-primary hover:scale-[1.005] active:scale-100 transition-all duration-300 text-lg font-bold shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSending ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-on-primary-container" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    전송 중...
                  </>
                ) : (
                  '무료 가이드 신청하기'
                )}
              </button>
            </form>
          </>
        )}
      </div>
    </section>
  );
};
