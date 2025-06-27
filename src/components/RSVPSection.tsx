
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const RSVPSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    guests: '',
    attending: '',
    dietaryRestrictions: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "RSVP Submitted!",
      description: "Thank you for your response. We can't wait to celebrate with you!",
    });
    console.log('RSVP Data:', formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section className="py-16 animate-fade-in">
      <div 
        className="relative rounded-lg overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.9), rgba(255,255,255,0.8)), url('https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=1200&h=800&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="max-w-2xl mx-auto p-8 md:p-12">
          <h2 className="font-serif text-3xl md:text-4xl text-center text-gray-800 mb-8">
            Please RSVP
          </h2>
          <p className="text-center text-gray-600 mb-8">
            We would be delighted to have you join us on our special day
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name" className="font-serif text-gray-700">Full Name</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="mt-1 bg-white/80"
                  required
                />
              </div>
              <div>
                <Label htmlFor="email" className="font-serif text-gray-700">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="mt-1 bg-white/80"
                  required
                />
              </div>
            </div>
            
            <div>
              <Label htmlFor="guests" className="font-serif text-gray-700">Number of Guests</Label>
              <Input
                id="guests"
                type="number"
                min="1"
                max="5"
                value={formData.guests}
                onChange={(e) => handleInputChange('guests', e.target.value)}
                className="mt-1 bg-white/80"
                required
              />
            </div>
            
            <div>
              <Label className="font-serif text-gray-700 mb-3 block">Will you be attending?</Label>
              <RadioGroup
                value={formData.attending}
                onValueChange={(value) => handleInputChange('attending', value)}
                className="flex space-x-6"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="yes" />
                  <Label htmlFor="yes">Yes, I'll be there!</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="no" />
                  <Label htmlFor="no">Sorry, can't make it</Label>
                </div>
              </RadioGroup>
            </div>
            
            <div>
              <Label htmlFor="dietary" className="font-serif text-gray-700">Dietary Restrictions or Special Requests</Label>
              <Textarea
                id="dietary"
                value={formData.dietaryRestrictions}
                onChange={(e) => handleInputChange('dietaryRestrictions', e.target.value)}
                className="mt-1 bg-white/80"
                rows={3}
                placeholder="Please let us know of any dietary restrictions or special requests..."
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-blush-500 hover:bg-blush-600 text-white font-serif text-lg py-3"
            >
              Send RSVP
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RSVPSection;
