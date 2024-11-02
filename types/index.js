export interface User{
   email:string;
   email_verified_at?: Date;
   id: number;
   name: string;
   two_factor_confirmed_at?: Date;
   two_factor_recovery_codes?: number;
   two_factor_secret?: string;
   updated_at: Date;
   created_at: Date;
}

export interface LoginPayload{
  email:string;
  password:string;
}

export interface RegisterPayload{
  name:string;
  email:string;
  password:string;
  password_confirmation:string;
}

export interface RawLink {
  id:number;
  short_link:string;
  full_link:string;
  views:number;
  created_at:string;
  updated_at:string;
}

export interface Link extends Omit<RawLink, "created_at" | "updated_at">{
  created_at:Date;
  updated_at:Date;
}


export interface ItemPayload{
  name:string;
  description:string;
  price:number;
}

// Define the structure for an individual item
export interface Item {
  id: number;
  name: string;
  description: string;
  price: number;
  created_at: string;
  updated_at: string;
  user_id: number;
}

// Define the structure for pagination links
export interface Link {
  url: string | null;
  label: string;
  active: boolean;
}

// Define the structure for itemData
interface ItemData {
  data: Item[];
  links: Link[];
  meta: {
    current_page: number;
    from: number;
    last_page: number;
    per_page: number;
    to: number;
    total: number;
  };
}