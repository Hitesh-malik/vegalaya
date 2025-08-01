import React from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const SocialMediaSection = () => {
  const socialPlatforms = [
    {
      name: "Instagram",
      handle: "@veebaofficial",
      followers: "125K",
      description: "Daily recipe inspiration, cooking tips, and community creations",
      icon: "Instagram",
      color: "bg-gradient-to-r from-purple-500 to-pink-500",
      url: "https://instagram.com/veebaofficial"
    },
    {
      name: "Facebook",
      handle: "VEEBA Foods",
      followers: "89K",
      description: "Join our cooking community for live sessions and recipe sharing",
      icon: "Facebook",
      color: "bg-blue-600",
      url: "https://facebook.com/veebafoods"
    },
    {
      name: "YouTube",
      handle: "VEEBA Kitchen",
      followers: "45K",
      description: "Step-by-step cooking tutorials and chef collaborations",
      icon: "Youtube",
      color: "bg-red-600",
      url: "https://youtube.com/veebakitchen"
    },
    {
      name: "WhatsApp",
      handle: "Cooking Support",
      followers: "24/7",
      description: "Instant cooking help and recipe assistance",
      icon: "MessageCircle",
      color: "bg-green-600",
      url: "https://wa.me/919876543210"
    }
  ];

  const communityPosts = [
    {
      id: 1,
      user: "Priya Sharma",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150",
      content: "Made the most amazing pasta with VEEBA Pesto sauce! My family loved it. Thank you for the recipe suggestion! 🍝❤️",
      image: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=300",
      likes: 24,
      platform: "Instagram"
    },
    {
      id: 2,
      user: "Rajesh Kumar",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
      content: "VEEBA\'s cooking helpline saved my dinner party! The chef guided me through the perfect marinade technique. Excellent support! 👨‍🍳",
      likes: 18,
      platform: "Facebook"
    },
    {
      id: 3,
      user: "Sneha Patel",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
      content: "Just watched the new VEEBA cooking tutorial on YouTube. The sandwich spread combinations are genius! Can\'t wait to try them all. 🥪",
      likes: 31,
      platform: "YouTube"
    }
  ];

  const handleSocialClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className="bg-white rounded-2xl culinary-shadow p-6 lg:p-8">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-12 h-12 gradient-brand rounded-xl flex items-center justify-center">
          <Icon name="Users" size={24} className="text-white" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-text-primary">Join Our Community</h3>
          <p className="text-sm text-text-secondary">Connect with fellow food enthusiasts and get cooking inspiration</p>
        </div>
      </div>

      {/* Social Platforms */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {socialPlatforms.map((platform) => (
          <div
            key={platform.name}
            className="border border-border rounded-lg p-4 hover:border-primary/50 transition-colors cursor-pointer"
            onClick={() => handleSocialClick(platform.url)}
          >
            <div className="flex items-start space-x-4">
              <div className={`w-12 h-12 ${platform.color} rounded-lg flex items-center justify-center`}>
                <Icon name={platform.icon} size={24} className="text-white" />
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-2 mb-1">
                  <h4 className="font-semibold text-text-primary">{platform.name}</h4>
                  <span className="text-xs bg-accent/20 text-primary px-2 py-1 rounded-full">
                    {platform.followers}
                  </span>
                </div>
                <p className="text-sm text-text-secondary mb-2">{platform.handle}</p>
                <p className="text-xs text-text-secondary leading-relaxed">{platform.description}</p>
              </div>
              
              <Icon name="ExternalLink" size={16} className="text-text-secondary" />
            </div>
          </div>
        ))}
      </div>

      {/* Community Posts */}
      <div className="mb-6">
        <h4 className="text-lg font-semibold text-text-primary mb-4">Community Highlights</h4>
        
        <div className="space-y-4">
          {communityPosts.map((post) => (
            <div key={post.id} className="border border-border rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <Image
                  src={post.avatar}
                  alt={post.user}
                  className="w-10 h-10 rounded-full object-cover"
                />
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2 mb-2">
                    <h5 className="font-medium text-text-primary">{post.user}</h5>
                    <span className="text-xs bg-surface text-text-secondary px-2 py-1 rounded">
                      {post.platform}
                    </span>
                  </div>
                  
                  <p className="text-sm text-text-secondary mb-3 leading-relaxed">{post.content}</p>
                  
                  {post.image && (
                    <div className="mb-3">
                      <Image
                        src={post.image}
                        alt="Community post"
                        className="w-full h-32 object-cover rounded-lg"
                      />
                    </div>
                  )}
                  
                  <div className="flex items-center space-x-4 text-xs text-text-secondary">
                    <div className="flex items-center space-x-1">
                      <Icon name="Heart" size={14} />
                      <span>{post.likes} likes</span>
                    </div>
                    <button className="hover:text-primary transition-colors">Reply</button>
                    <button className="hover:text-primary transition-colors">Share</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-6 text-center">
        <h4 className="text-lg font-semibold text-text-primary mb-2">Share Your VEEBA Creations</h4>
        <p className="text-sm text-text-secondary mb-4">
          Tag us in your cooking adventures and get featured in our community highlights!
        </p>
        
        <div className="flex flex-wrap justify-center gap-3">
          <Button
            variant="outline"
            size="sm"
            iconName="Camera"
            iconPosition="left"
            onClick={() => handleSocialClick("https://instagram.com/veebaofficial")}
          >
            Share on Instagram
          </Button>
          
          <Button
            variant="outline"
            size="sm"
            iconName="MessageSquare"
            iconPosition="left"
            onClick={() => handleSocialClick("https://wa.me/919876543210")}
          >
            WhatsApp Support
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaSection;