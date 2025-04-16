import ProfileForm from '@/components/profile/ProfileForm';

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Meu Perfil</h1>
          <div className="bg-white rounded-lg shadow p-6">
            <ProfileForm />
          </div>
        </div>
      </div>
    </main>
  );
} 