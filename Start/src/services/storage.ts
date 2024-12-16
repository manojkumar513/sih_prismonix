interface StorageData {
  users: Record<string, any>;
}

class StorageService {
  private readonly STORAGE_KEY = 'app_users_data';
  private data: StorageData = { users: {} };

  constructor() {
    this.loadData();
  }

  private loadData(): void {
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      if (stored) {
        this.data = JSON.parse(stored);
      } else {
        this.saveData();
      }
    } catch (error) {
      console.error('Error loading data:', error);
      this.saveData();
    }
  }

  private saveData(): void {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.data));
    } catch (error) {
      console.error('Error saving data:', error);
    }
  }

  getUser(id: string): any {
    return this.data.users[id] || null;
  }

  getAllUsers(): any[] {
    return Object.values(this.data.users);
  }

  saveUser(user: any): void {
    this.data.users[user.id] = user;
    this.saveData();
  }

  deleteUser(id: string): void {
    delete this.data.users[id];
    this.saveData();
  }
}

export const storageService = new StorageService();