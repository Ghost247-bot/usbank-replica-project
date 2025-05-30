
import React from 'react';
import { CreditCard } from 'lucide-react';
import { CreditCard as CreditCardType } from './types';
import { getUserDisplayName } from './utils';
import FreezeDialog from './FreezeDialog';
import DeleteDialog from './DeleteDialog';
import EditCreditCardDialog from './EditCreditCardDialog';

interface CreditCardListProps {
  cards: CreditCardType[];
  onFreezeCard: (cardId: string, freeze: boolean, reason?: string) => void;
  onDeleteCard: (cardId: string) => void;
  onEditCard: (cardId: string, cardData: {
    card_type: string;
    credit_limit: number;
    interest_rate: number;
    current_balance: number;
  }) => Promise<boolean>;
  loading: boolean;
}

const CreditCardList: React.FC<CreditCardListProps> = ({
  cards,
  onFreezeCard,
  onDeleteCard,
  onEditCard,
  loading
}) => {
  if (cards.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">No credit cards found</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {cards.map((card) => (
        <div key={card.id} className="flex items-center justify-between p-4 border rounded-lg">
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-1">
              <CreditCard className="h-4 w-4" />
              <h3 className="font-medium">{card.card_type}</h3>
              <span className={`text-xs px-2 py-1 rounded-full ${
                card.status === 'active' ? 'bg-green-50 text-green-600' : 'bg-gray-50 text-gray-600'
              }`}>
                {card.status}
              </span>
            </div>
            <p className="text-sm text-gray-600">
              **** **** **** {card.card_number.slice(-4)} • {getUserDisplayName(card)}
            </p>
            <p className="text-sm">
              Balance: ${Number(card.current_balance).toLocaleString()} / ${Number(card.credit_limit).toLocaleString()}
            </p>
            {card.is_frozen && (
              <p className="text-sm text-red-600">
                Frozen: {card.freeze_reason}
              </p>
            )}
          </div>
          <div className="flex space-x-2">
            <EditCreditCardDialog
              card={card}
              onEditCard={onEditCard}
              loading={loading}
            />
            <FreezeDialog
              item={card}
              onFreeze={onFreezeCard}
              loading={loading}
              type="card"
            />
            <DeleteDialog
              item={card}
              onDelete={onDeleteCard}
              loading={loading}
              type="card"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CreditCardList;
