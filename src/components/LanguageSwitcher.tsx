import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";

const LanguageSwitcher = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const isEnglish = location.pathname.startsWith('/en');
  
  const switchToJapanese = () => {
    navigate('/');
  };
  
  const switchToEnglish = () => {
    navigate('/en');
  };

  return (
    <div className="fixed top-4 right-4 z-50 flex gap-2 bg-background/90 backdrop-blur-sm rounded-lg p-2 shadow-lg border">
      <Button
        variant={!isEnglish ? "default" : "outline"}
        size="sm"
        onClick={switchToJapanese}
        className="text-sm"
      >
        日本語
      </Button>
      <Button
        variant={isEnglish ? "default" : "outline"}
        size="sm"
        onClick={switchToEnglish}
        className="text-sm"
      >
        English
      </Button>
    </div>
  );
};

export default LanguageSwitcher;